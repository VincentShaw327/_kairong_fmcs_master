import React, { PureComponent, Fragment } from 'react';
import { Table, Alert } from 'antd';
import styles from './index.less';

function initTotalList(columns) {
  const totalList = [];
  columns.forEach((column) => {
    if (column.needTotal) {
      totalList.push({ ...column, total: 0 });
    }
  });
  return totalList;
}

class StandardTable extends PureComponent {
  constructor(props) {
    super(props);
    const { columns } = props;
    const needTotalList = initTotalList(columns);

    this.state = {
      selectedRowKeys: [],
      needTotalList,
    };
  }

  componentWillReceiveProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      const needTotalList = initTotalList(nextProps.columns);
      this.setState({
        selectedRowKeys: [],
        needTotalList,
      });
    }
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    let needTotalList = [...this.state.needTotalList];
    needTotalList = needTotalList.map((item) => {
      return {
        ...item,
        total: selectedRows.reduce((sum, val) => {
          return sum + parseFloat(val[item.dataIndex], 10);
        }, 0),
      };
    });

    if (this.props.onSelectRow) {
      this.props.onSelectRow(selectedRows);
    }

    this.setState({ selectedRowKeys, needTotalList });
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.props.onChange(pagination, filters, sorter);
  }

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], []);
  }



  render() {
    const { selectedRowKeys, needTotalList } = this.state;
    const { data: { list, pagination }, loading, columns,isHaveSelect } = this.props;

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      ...pagination,
    };

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({
        disabled: record.disabled,
      }),
    };

    let getAlertMes=()=>{

      return  (<div className={styles.tableAlert}>
                      <Alert
                        message={(
                          // <Fragment>
                        <div>
                            已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项&nbsp;&nbsp;
                            {
                              needTotalList.map(item => (
                                <span style={{ marginLeft: 8 }} key={item.dataIndex}>{item.title}总计&nbsp;
                                  <span style={{ fontWeight: 600 }}>
                                    {item.render ? item.render(item.total) : item.total}
                                  </span>
                                </span>
                                )
                              )
                            }
                            <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>清空</a>
                        </div>
                    // </Fragment>
                        )}
                        type="info"
                        showIcon
                      />
                    </div>)
    }

    return (
      <div className={styles.standardTable}>
        {
            isHaveSelect?getAlertMes():null
        }
        <Table
          loading={loading}
          rowKey={record => record.key}
          rowSelection={isHaveSelect?rowSelection:null}
          dataSource={list}
          columns={columns}
          pagination={paginationProps}
          // onChange={this.handleTableChange}
        />
      </div>
    );
  }
}

export default StandardTable;