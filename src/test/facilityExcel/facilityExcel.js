import axios from "@/api/axios.js";

const search = async () => {
    const params = {
        "take": 10,
        "sort":[
            // {
            //     "dir":"desc",
            //     "field":"pswdUpdDt"
            // }
        ],
        "filter":[
            // {
            //     "field":"fcltsGrpId",
            //     "value":"2",
            //     "operator":"eq"
            // }
        ]

    }

    return await axios.post("/facilities/excel", params);
}

const excelDownload = async () => {
    const params = {
        filename: "filenameTest",
        sheets : [{
            sheetName : "sheet1",
            searchDTO : {
                "take": 10,
                "sort":[
                    // {
                    //     "dir":"desc",
                    //     "field":"pswdUpdDt"
                    // }
                ],
                "filter":[
                    // {
                    //     "field":"fcltsGrpId",
                    //     "value":"2",
                    //     "operator":"eq"
                    // }
                ]
            },
            excelColumnList : [{
                field : "fcltsId",
                fieldKorNm : "시설물 아이디"
            },{
                field : "fcltsGrpId",
                fieldKorNm : "시설물 그룹 아이디"
            }]
        },{
            sheetName : "sheet2",
            searchDTO : {
                "take": 10,
                "sort":[
                    // {
                    //     "dir":"desc",
                    //     "field":"pswdUpdDt"
                    // }
                ],
                "filter":[
                    // {
                    //     "field":"fcltsGrpId",
                    //     "value":"2",
                    //     "operator":"eq"
                    // }
                ]
            },
            excelColumnList : [{
                field : "fcltsId",
                fieldKorNm : "시설물 아이디"
            },{
                field : "trblYn",
                fieldKorNm : "장애 여부"
            }]
        }]
    }

    return await axios.post("/facilities/excel", params, {responseType: 'blob'});

}

export {
    search,
    excelDownload,
    // insert
}