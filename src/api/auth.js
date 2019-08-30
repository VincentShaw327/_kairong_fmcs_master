import { ajax } from 'utils'

/* 权限组 */
export const auth_group_list = ajax.fetchJSONByPost( 'api/auth/group/list' )
export const auth_group_add = ajax.fetchJSONByPost( 'api/auth/group/add' )
export const auth_group_update = ajax.fetchJSONByPost( 'api/auth/group/update' )
export const auth_group_delete = ajax.fetchJSONByPost( 'api/auth/group/delete' )

/* 权限类别 */
export const auth_category_list = ajax.fetchJSONByPost( 'api/auth/category/list' )
export const auth_category_add = ajax.fetchJSONByPost( 'api/auth/category/add' )
export const auth_category_update = ajax.fetchJSONByPost( 'api/auth/category/update' )
export const auth_category_delete = ajax.fetchJSONByPost( 'api/auth/category/delete' )

/* 权限项 */
export const auth_item_list = ajax.fetchJSONByPost( 'api/auth/item/list' )
export const auth_item_add = ajax.fetchJSONByPost( 'api/auth/item/add' )
export const auth_item_update = ajax.fetchJSONByPost( 'api/auth/item/update' )
export const auth_item_delete = ajax.fetchJSONByPost( 'api/auth/item/delete' )
