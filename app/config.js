export default ( () => {
  window.gconfig = {};
  +( function ( global ) {
    // 本地开发打开的路径以及端口
    global.linkUrl = 'http://dev.mes.top-link.me/';
    // global.linkUrl = 'http://localhost:3000/';
    // global.linkUrl = 'http://dev.mes.top-link.me/';
    if ( process.env.NODE_ENV === 'production' ) { // 生产环境用不同的接口地址
      global.linkUrl = 'http://dev.mes.top-link.me/';
    }
    global.isDemo_dev = false;
    // 系统一二级菜单
    global.nav = [
      {
        name: '系统主页',
        icon: 'home',
        key: '/home',
        url: '/home',
        authItem: 'home',
      },
      {
        name: '能源监控',
        icon: 'compass',
        key: '/scada/energy',
        url: '/scada/energy',
        authItem: 'energy',
      },
      {
        name: '环境监控',
        icon: 'compass',
        // key: '/scada/energy',
        // url: '/scada/energy',
        authItem: 'energy',
        children: [
          {
            name: '温湿度监视',
            // icon: 'desktop',
            key: '/ambience/plate',
            url: '/ambience/plate',
          },
          {
            name: '设备监视',
            // icon: 'desktop',
            key: '/ambience/device',
            url: '/ambience/device',
          },
          {
            name: '一楼',
            // icon: 'desktop',
            key: '/scada/first',
            url: '/scada/first',
            authItem: 'scada',
          },
          {
            name: '二楼',
            // icon: 'desktop',
            key: '/scada/second',
            url: '/scada/second',
            authItem: 'scada',
          },
          {
            name: '三楼',
            // icon: 'desktop',
            key: '/scada/third',
            url: '/scada/third',
            authItem: 'scada',
          },
        ],
      },
      {
        name: '数据报表',
        icon: 'bar-chart',
        key: 'report',
        children: [
          {
            name: '能源',
            icon: 'fund',
            children: [
              {
                name: '按月',
                key: '/report/energy/month',
                url: '/report/energy/month',
              },
              {
                name: '按周',
                key: '/report/energy/week',
                url: '/report/energy/week',
              },
              {
                name: '按日',
                key: '/report/energy/day',
                url: '/report/energy/day',
              },
            ],
          },
          {
            name: '环境',
            icon: 'dot-chart',
            key: '/report/ambience',
            url: '/report/ambience',
            authItem: 'scada',
            children: [
              {
                name: '一楼',
                key: '/report/ambience/first',
                url: '/report/ambience/first',
              },
              {
                name: '二楼',
                key: '/report/ambience/second',
                url: '/report/ambience/second',
              },
              {
                name: '三楼',
                key: '/report/ambience/third',
                url: '/report/ambience/third',
              },
            ],
          },
          {
            name: '异常故障',
            // icon: 'dot-chart',
            key: '/report/error',
            url: '/report/error',
          },
        ],
      },
      /* {
        name: '顶楼',
        icon: 'desktop',
        key: '/demos/top',
        url:'/demos/top',
        authItem:'scada',
      }, */
      /* {
        name: '生产管理',
        icon: 'form',
        url: '',
        key: 'manufacture',
        children: [
          {
            name:'demo1', key: '/demos/one',url:'/demos/one',
          },
          {
            name:'demo2', key: '/demos/two',url:'/demos/two',
          },
          {
            name:'生产任务', key: '/production/task',url:'production/task',authItem:'task_list',
          },
          {
            name:'工单管理', key: '/production/job',url:'/production/job',authItem:'job_list',
          },
          {
            name:'派工单管理', key: '/production/dist',url:'/production/dist',authItem:'dist_list',
          },
          {
            name:'投料计划', key: '/production/feeding',url:'/production/feeding',authItem:'feeding_list',
          },
          {
            name:'计划达成率', key: 'planned_completion_rate',url:'planned_completion_rate',
          },
        ],
      }, */
      {
        name: '系统设置',
        icon: 'setting',
        url: '',
        key: 'TSystemSetting',
        children: [
          {
            name: '角色管理', key: '/setting/role', url: '/setting/role',
          },
          /* {
            name:'权限列表', key: '/setting/auth_list',url:'/setting/auth_list',
          }, */
          {
            name: '权限管理', key: '/setting/auth_group_list', url: '/setting/auth_group_list',
          },
          {
            name: '用户列表', key: '/setting/user_list', url: '/setting/user_list',
          },
          {
            name: '个人设置', key: '/setting/user_set', url: '/setting/user_set',
          },
        ],
      },
    ];
  }( window.gconfig ) );
} )()

export const prefix = global.gconfig.linkUrl
// export const suffix = '.json'
export const suffix = ''

/* tp_config={
  theme:'',
  layout:'',
  projectlist:[{
    theme:'',
    layout:'',
    nav:[{}]
  }],

} */