import axios from "./src/api/axios.js";
import './style.css'
// import {search, insert} from "@/test/insp/insp";

// import {search, excelDownload} from "@/test/vmsDsplLog/vmsDsplLog"
// import {search, excelDownload} from "@/test/facilityExcel/facilityExcel"
import {search} from "@/test/troubleAction/imgSearch"
import createDom from "@/js/CreateDom.js";

//========== DOM ============
const sendBtn = document.createElement("button");
sendBtn.textContent = "전송";

sendBtn.addEventListener("click", async () => {
    //vmsDsplLogExcel 테스트
    // await vmsDsplLogExcelTest();
    // await facilityExcelDownload();

    //vms 표출 이력 테스트
    // const imgs = await vmsDsplLogTest();
    // imgs.forEach(img => document.querySelector("#app").append(img));

    //고장처리 이미지 표출 테스트
    // troubleActionImgTest();

})

document.querySelector("#app").append(sendBtn);

//======troubleActionImg
function troubleActionImgTest() {
    const res = search();
    console.log(res.items)
    res.items.forEach(item => {
      item.files.forEach(file => {
          const img = createDom("img", {
              "src": 'data:image/png;base64,' + file.fileStr
          })
          document.querySelector("#app").append(img);
      })
    })

}



//======vmsDsplLogTest

async function vmsDsplLogTest() {
    const res = await search();
    const data = res?.data;
    const items = data?.items
    console.log(items);

    const imgList = [];
    items.forEach((item) => {
        const img = createDom("img", {
            "src": 'data:image/png;base64,' + item.dsplImgStr
        })
        imgList.push(img);
    })

    return imgList;
}

//======vmsLogExcelTest
async function vmsDsplLogExcelTest() {
    const res = await excelDownload();
    console.log(res)
    const {data, headers} = res;
    const blob = new Blob([data], {
        type: headers['content-type'],
    })

    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a')
    link.href = blobUrl
    const filename = headers['content-disposition']
        .split('filename=')[1]
        .split('.')[0]
    link.download = filename // 확장자는 굳이 추가하지 않아도 .xlsx로 다운로드됨
    link.click()
    URL.revokeObjectURL(blobUrl)
}

//======facilityExcelDonwload test
async function facilityExcelDownload() {
    const res = await excelDownload();
    console.log(res)
    const {data, headers} = res;
    const blob = new Blob([data], {
        type: headers['content-type'],
    })

    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a')
    link.href = blobUrl
    const filename = headers['content-disposition']
        .split('filename=')[1]
        .split('.')[0]
    link.download = filename // 확장자는 굳이 추가하지 않아도 .xlsx로 다운로드됨
    link.click()
    URL.revokeObjectURL(blobUrl)
}

// =========== insSymbol
async function makeSymbolDOM() {
    const form = document.createElement("form");

    const imgField = document.createElement("input");
    imgField.setAttribute("name", "images");
    imgField.setAttribute("type", "file");
    imgField.setAttribute("multiple", "multiple");
    imgField.setAttribute("id", "file");
    form.appendChild(imgField);

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit")
    submit.setAttribute("value", "submit")
    submit.setAttribute("id", "submit")

    submit.addEventListener('click', async (e) => {
        e.preventDefault();
        const fileEle = document.querySelector("#file");
        console.log(fileEle.files)
        const formData = new FormData();
        // formData.append("param", JSON.stringify({symbNm: "test2", symbType: "04"}));

        formData.append("param", new Blob([JSON.stringify({symbNm: "test2", symbType: "04"})], {type: "application/json"}));
        for(const file of fileEle.files) {
            formData.append("images", file);
        }

        const response = await axios.post("/symbol/insert", formData, {
            headers: { 'Content-Type': "multipart/form-data"},
        });
        console.log(response)
    });
    form.appendChild(submit);

    document.querySelector("#app").append(form);

}