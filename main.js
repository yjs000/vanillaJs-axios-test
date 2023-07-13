import axios from "./src/api/axios.js";
import './style.css'
// import {search, insert} from "@/test/insp/insp";
// import {search} from "@/test/vmsDsplLog/vmsDsplLog"
import createDom from "@/js/CreateDom.js";

//========== DOM ============
const sendBtn = document.createElement("button");
sendBtn.textContent = "전송";
sendBtn.addEventListener("click", async () => {
    // insert();

    //vms 표출 이력 테스트
    // const imgs = await vmsDsplLogTest();
    // imgs.forEach(img => document.querySelector("#app").append(img));

    //
})

document.querySelector("#app").append(sendBtn);


//======vmsDsplLogTest

async function vmsDsplLogTest() {
    const res = await search();
    const data = res?.data;
    const items = data?.items
    console.log(items);

    const imgList = [];
    items.forEach((item) => {
        const img = createDom("img", {
            "src" : 'data:image/png;base64,' + item.dsplImgStr
        })
        imgList.push(img);
    })

    return imgList;
}
