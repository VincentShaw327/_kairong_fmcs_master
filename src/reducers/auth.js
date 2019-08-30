import { message } from 'antd'
import { handleActions } from 'redux-actions'
import { hasResponseError } from 'utils'
import Mock from 'mockjs'
import { fn_mes_array } from 'functions'

const { Random } = Mock;

const initAuthGroupState = {
  list: [],
  lsCurGroupAuth: [],
  lsAuthCategory: [],
  lsAuthItem: [],
  lsAuthItemChecked: [],
  defaultMenuKeys: [],
  authGroupItem: {},
  currentPage: 1,
  pageCount: 0,
  pageSize: 20,
  totalCount: 0,
}
export const AuthGroup = handleActions( {
  'request auth group list'( state, action ) {
    return { ...state, loading: true }
  },
  'receive auth group list'( state, action ) {
    const { req, res } = action.payload
    let list = [];
    if ( hasResponseError( res ) ) {
      message.error( res.msg )
      return { ...state, loading: false }
    }
    // console.log( '权限组数据:', res )
    const { data } = res;
    list = fn_mes_array.addKey( res.data.list, 'key' );
    state.defaultMenuKeys = [list[0].strGroupCode];
    const authGroupItem = list[0];
    const pagenation = {
        page: data.page,
        size: data.size,
        total: data.total,
    }
    return {
        ...state, list, authGroupItem, loading: false, ...pagenation,
    }
  },
  'receive auth item_category list'( state, action ) {
    const { res } = action.payload
    let lsAuthCategory = [];
    if ( hasResponseError( res ) ) {
      message.error( res.msg )
      return { ...state, loading: false }
    }
    console.log( '权限组数据:', res )
    const { data } = res;
    lsAuthCategory = fn_mes_array.addKey( res.data.list, 'key' );
    return {
        ...state, lsAuthCategory, loading: false,
    }
  },
  'receive auth_item group list'( state, action ) {
    const { res } = action.payload
    let lsAuthItem = [];
    if ( hasResponseError( res ) ) {
      message.error( res.msg )
      return { ...state, loading: false }
    }
    console.log( '权限组数据:', res )
    const { data } = res;
    lsAuthItem = fn_mes_array.addKey( res.data.list, 'key' );
    return {
        ...state, lsAuthItem,
    }
  },
  'set init auth group checked item'( state, action ) {
    const { fn } = action.payload
    // lsAuthItem = fn_mes_array.addKey( res.data.list, 'key' );
    console.log( '设置初始化 item check' )
    let lsAuthItemChecked = [];
    state.lsCurGroupAuth = state.list[0].strItemList.split( ',' );
    // state.defaultMenuKeys = [state.list[0].strGroupCode];
    lsAuthItemChecked = state.lsAuthCategory.map( ( ele1 ) => {
        const obj = {
            TypeName: ele1.strCategoryName,
            TypeNote: ele1.strCategoryNote,
            authList: [],
            defaultValue: [],
            options: [],
        }
        state.lsAuthItem.forEach( ( ele2 ) => {
            if ( ele2.uCategoryUUID === ele1.uObjectUUID ) {
                obj.options.push( ele2.strItemCode )
                obj.authList.push( {
                    label: ele2.strItemName,
                    value: ele2.strItemCode,
                } )
            }
            if ( state.lsCurGroupAuth.includes( ele2.strItemCode ) ) {
                obj.defaultValue.push( ele2.strItemCode )
            }
        } );
        return obj
    } )
    // fn( state.list )
    return {
        ...state, lsAuthItemChecked,
    }
  },
  'set current auth group checked item'( state, action ) {
    const { ag_key, fn } = action.payload
    // lsAuthItem = fn_mes_array.addKey( res.data.list, 'key' );
    // console.log( '设置 item checked', action, groupItem )
    let lsAuthItemChecked = [];
    let groupItem;
    state.list.forEach( ( ele ) => {
        // if ( ele.strGroupCode === ag_key )groupItem = ele
        if ( ele.strGroupCode === ag_key ) {
          state.lsCurGroupAuth = typeof ( ele.strItemList ) === 'string' ? ele.strItemList.split( ',' ) : [];
          state.authGroupItem = ele
        }
    } )
    // console.log( '设置 item checked', action, groupItem )
    lsAuthItemChecked = state.lsAuthItemChecked.map( ( ele1 ) => {
         ele1.defaultValue = [];
        ele1.authList.forEach( ( ele2 ) => {
            if ( state.lsCurGroupAuth.includes( ele2.value ) ) {
              // console.log( 'ele1', ele1 )
                ele1.defaultValue.push( ele2.value )
            }
        } );
        return ele1
    } )
    // fn( state.lsCurGroupAuth )
    return {
         ...state, lsAuthItemChecked,
    }
    // return Object.assign( state, lsAuthItemChecked )
  },
  'success add auth group'( state, action ) {
    const { req, res } = action.payload
    if ( hasResponseError( res ) ) {
        message.error( res.msg )
        return { ...state, loading: false }
    }
    if ( !gconfig.isDemo_dev ) {
        const { data } = res;
        const newObj = data.obj;
        newObj.key = data.uuid;
        state.list.push( newObj )
        console.log( '成功添加', res )
        // const list = fn_mes_array.addKey( res.data.list, 'key' );
        const pagenation = {
            page: data.page,
            size: data.size,
            total: data.total,
        }
        return {
        ...state, loading: false, ...pagenation,
        }
    }
    return { ...state, loading: false }
   },
  'success update auth group'( state, action ) {
    const { req, res } = action.payload
    const u_item = res.data;
    console.log( '成功更新', res );
    if ( hasResponseError( res ) ) {
      message.error( res.msg )
      return { ...state, loading: false }
    }
    const list = state.list.map( ( item ) => {
      // console.log( 'item', item )
      if ( item.uObjectUUID === u_item.uuid ) {
        Object.assign( item, u_item.obj )
      }
      return item;
    } );
    return { ...state, list, loading: false }
  },
  'success delete auth group'( state, action ) {
    const { req, res } = action.payload;
    if ( hasResponseError( res ) ) {
        message.error( res.msg )
        return { ...state, loading: false }
    }
    console.log( '删除成功！', res );
    message.success( '删除成功！' );
    const list = state.list.filter( item => ( item.uObjectUUID != res.data.uuids[0] ) )
    state.list = list;
    return { ...state }
  },

}, initAuthGroupState )


const initAuthCategoryState = {
  list: [],
  authItemList: [],
  currentPage: 1,
  pageCount: 0,
  pageSize: 20,
  totalCount: 0,
}
export const AuthCategory = handleActions( {
  'request user account list'( state, action ) {
    return { ...state, loading: true }
  },
  'receive user account list'( state, action ) {
    const { req, res } = action.payload
    let list = [];
    if ( hasResponseError( res ) ) {
      message.error( res.msg )
      return { ...state, loading: false }
    }

    if ( !gconfig.isDemo_dev ) {
      const { data } = res;
      const list = fn_mes_array.addKey( res.data.list, 'key' );
      const pagenation = {
          page: data.page,
          size: data.size,
          total: data.total,
      }
      return {
          ...state,
          list,
          loading: false,
          ...pagenation,
      }
    }
    list = res.objectlist.map( ( item, index ) => ( {
            UUID: item.UUID,
            key: index,
            Name: `user_${index}`,

            LoginName: Mock.mock( '@cname' ),
            Email: Random.email(),
            Mobile: '13800001111',
            Phone: '0755-23455432',
            Number: `process_${index}`,
            ID: `moldmodel_${index}`,
            'TypeName|1': ['自动组装车间', '注塑车间', '冲压车间'], // 类别名称
            Desc: '-',
            Note: '-',
            Modifier: Mock.mock( '@cname()' ),
            Founder: Mock.mock( '@cname()' ),
            CreateTime: Random.datetime(),
            ActiveDateTime: Random.datetime(),
            UpdateDateTime: Random.now(),
    } ) )
    list = Mock.mock( list );
    res.objectlist = list;
    // res.totalcount=Mock.mock('@natural(0, 65)');
    res.totalcount = 20;
    return { list: list, total: res.totalcount, loading: false }
  },
  'success add account'( state, action ) {
    const { req, res } = action.payload
    if ( hasResponseError( res ) ) {
        message.error( res.msg )
        return { ...state, loading: false }
    }
    if ( !gconfig.isDemo_dev ) {
        const { data } = res;
        const newObj = data.obj;
        newObj.key = data.uuid;
        state.list.push( newObj )
        console.log( '成功添加', res )
        // const list = fn_mes_array.addKey( res.data.list, 'key' );
        const pagenation = {
            page: data.page,
            size: data.size,
            total: data.total,
        }
        return {
        ...state, loading: false, ...pagenation,
        }
    }
    return { ...state, loading: false }
  },
  'success update account'( state, action ) {
    const { req, res } = action.payload
    const u_item = res.data;
    console.log( '成功更新', res );
    if ( hasResponseError( res ) ) {
      message.error( res.msg )
      return { ...state, loading: false }
    }
    const list = state.list.map( ( item ) => {
      // console.log( 'item', item )
      if ( item.uObjectUUID === u_item.uuid ) {
        Object.assign( item, u_item.obj )
      }
      return item;
    } );
    return { ...state, list, loading: false }
  },
  'success delete account'( state, action ) {
    const { req, res } = action.payload;
    if ( hasResponseError( res ) ) {
        message.error( res.msg )
        return { ...state, loading: false }
    }
    console.log( '删除成功！', res );
    message.success( '删除成功！' );
    const list = state.list.filter( item => ( item.uObjectUUID !== res.data.uuids[0] ) )
    state.list = list;
    return { ...state }
  },
  'success login'( state, action ) {
    const { req, res } = action.payload
    console.log( 'auth', res )
    let list = [];
    if ( hasResponseError( res ) ) {
      message.error( res.msg )
      return { ...state, loading: false }
    }

    list = Mock.mock( list );
    res.objectlist = list;
    // res.totalcount=Mock.mock('@natural(0, 65)');
    res.totalcount = 20;
    return { list: list, total: res.totalcount, loading: false }
  },

}, initAuthCategoryState )

