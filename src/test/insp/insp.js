import axios from "@/api/axios.js";

const search = () => {
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

    axios.post("/insps", params)
        .then(res => {
            console.log(res?.data)
        });

}

const insert = () => {
    const params = {
        "inspDiv" : "01",
        "inspNm" : "test",
        "fcltsDiv": "VD",
        "strtYmd" : "20230623",
        "endYmd" : "20230623",
        "repeatCycleCd": "D",
        // "inspPic" : "담당자이름",
    }

    axios.post("/insp/insert", params)
        .then(res => {
            console.log(res?.data)
        });

}

export {search, insert}