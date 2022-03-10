import requests from "./request";
import requestsMock from "./mockAjax";

export const reqCategoryList = () => {

    return requests({
        url: "product/getBaseCategoryList",
        method: "get"
    })
}


export const reqGetBanner = () => {
    return requestsMock.get('/banner')
}

export const reqGetFloor = () => {
    return requestsMock.get('/floor')
}

export const reqGetSerachInfo = (params) => requests({
    url: "/list",
    method: "post",
    data: params
})