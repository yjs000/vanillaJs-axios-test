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

    return await axios.post("/vmsLogs", params);
}

const excelDownload = async () => {
    const params = {
        "fileName" : "testtest",
        "searchDTO" : {
            "take": 10,
            "sort":[
                // {
                //     "dir":"desc",
                //     "field":"dsplDt"
                // }
            ],
            "filter":[
                // {
                //     "field":"vmsId",
                //     "value":"2020",
                //     "operator":"eq"
                // }
            ]
        },
        "columns" : [
            {"field" : "dsplSqno", "fieldKorNm" : "시퀀스"},
            {"field" : "vmsId", "fieldKorNm" : "브이엠에스"},
            {"field" : "clctDt", "fieldKorNm" : "콜렉트"},
            {"field" : "scnrId", "fieldKorNm" : "scnrIdkor"},
            {"field" : "dsplTime", "fieldKorNm" : "dsplTimekor"},
            {"field" : "dsplType", "fieldKorNm" : "dsplTypekor"},
            {"field" : "dsplImgStr", "fieldKorNm" : "dsplImgkor"},
            {"field" : "dsplDt", "fieldKorNm" : "dsplDkort"}
        ]
    }

    return await axios.post("/vmsLogs/excel", params, {responseType: 'blob'});

}

export {
    search,
    excelDownload,
    // insert
}