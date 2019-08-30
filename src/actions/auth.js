import {
    createAction,
} from 'redux-actions'
import {
    auth,
} from 'api'
import {
    createAjaxAction,
    fakeAjaxAction,
} from 'utils'

/* 权限组 */
export const auth_group_list = createAjaxAction(
    auth.auth_group_list,
    createAction( 'request auth group list' ),
    createAction( 'receive auth group list' ),
)
export const a_g_category_list = createAjaxAction(
    auth.auth_category_list,
    createAction( 'request auth item_category list' ),
    createAction( 'receive auth item_category list' ),
)
export const a_g_item_list = createAjaxAction(
    auth.auth_item_list,
    createAction( 'request auth_item group list' ),
    createAction( 'receive auth_item group list' ),
)
export const initCurGpChecked = createAction( 'set init auth group checked item' )
export const setCurGpChecked = createAction( 'set current auth group checked item' )
export const auth_group_add = createAjaxAction(
    auth.auth_group_add,
    null,
    createAction( 'success add auth group' ),
)
export const auth_group_update = createAjaxAction(
    auth.auth_group_update,
    null,
    createAction( 'success update auth group' ),
)
export const auth_group_delete = createAjaxAction(
    auth.auth_group_delete,
    null,
    createAction( 'success delete auth group' ),
)

/* 权限类别 */
export const auth_category_list = createAjaxAction(
    auth.auth_category_list,
    createAction( 'request auth category list' ),
    createAction( 'receive auth category list' ),
)
export const auth_category_add = createAjaxAction(
    auth.auth_category_add,
    null,
    createAction( 'success add auth category' ),
)
export const auth_category_update = createAjaxAction(
    auth.auth_category_update,
    null,
    createAction( 'success update auth category' ),
)
export const auth_category_delete = createAjaxAction(
    auth.auth_category_delete,
    null,
    createAction( 'success delete auth category' ),
)

/* 权限类别 */
export const auth_item_list = createAjaxAction(
    auth.auth_item_list,
    createAction( 'request auth item list' ),
    createAction( 'receive auth item list' ),
)
export const auth_item_add = createAjaxAction(
    auth.auth_item_add,
    null,
    createAction( 'success add auth item' ),
)
export const auth_item_update = createAjaxAction(
    auth.auth_item_update,
    null,
    createAction( 'success update auth item' ),
)
export const auth_item_delete = createAjaxAction(
    auth.auth_item_delete,
    null,
    createAction( 'success delete auth item' ),
)
