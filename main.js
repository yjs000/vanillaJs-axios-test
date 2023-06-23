import axios from "./src/api/axios.js";

const onClick = () => {
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
            console.log(res)
        });

}



//========== DOM ============
const sendBtn = document.createElement("button");
sendBtn.textContent = "전송";
sendBtn.addEventListener("click", () => {
    onClick();
})
document.querySelector("#app").append(sendBtn)
