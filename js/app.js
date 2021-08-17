let soal =[
    {
        s:'Hewan yang cuma punya satu huruf',
        answer : "gajah",
        result :"tentu saja jawabannya gajah karna namanya cuman g ajah :v"
    },
    {
        s:'Ditutup jadi tongkat, dibuka jadi tenda. Apakah itu?',
        answer : "payung",
        result :""
    },
    {
        s:'Apa yang ada di ujung langit?',
        answer : "t",
        result :""
    },
    {
        s:'Kebo apa yg bikin kita lelah? ',
        answer : "kebogor jalan kaki",
        result :""
    },
    {
        s:'Sayur apa yang pintar nyanyi?',
        answer : "kolplay",
        result :""
    },
    {
        s:'Apakah huruf keempat dalam abjad',
        answer : "a",
        result :""
    },
    {
        s:'kasur rusak dibalik jadi?',
        answer : "kasur rusak",
        result :""
    },
   
]

// quis
const nomorKuis = document.querySelector(".nomor-kuis") ;
const textKuis = document.querySelector(".text-kuis") ;
const sudah = document.querySelector(".sudah") ;
const buletIndicator1 = document.querySelector(".buletIndicator")
const start = document.querySelector(".start")
const now = document.querySelector(".now")
const result = document.querySelector(".result")
const limitKuis = 5;

let questionCounter = 0;
let kuisSekarang;
let kuisTersedia =[];
let jawabanKuis;
let benar = soal;
let jwbbenar =0;
let attempt = 0;


function setKuisTersedia(){
    const totalKuis = limitKuis;
    for(let i=0;i<totalKuis;i++){
        kuisTersedia.push(soal[i])
    }
}
function getNewQuestion(){
    
    // nomor jumlah kuis
nomorKuis.innerHTML = "JOKE BAPAK-BAPAK"+" "+ (questionCounter + 1) + "/" +limitKuis;
    // soalnya
    // random soal
    const indexSoal = kuisTersedia[Math.floor(Math.random()* kuisTersedia.length)]
    kuisSekarang= indexSoal;
    textKuis.innerHTML = kuisSekarang.s;

    const indexSoal1 = kuisTersedia.indexOf(indexSoal);
    // hapus lagi indexnya dari array
    kuisTersedia.splice(indexSoal1,1);
    // console.log(indexSoal)
    // console.log(kuisTersedia)
   
    questionCounter++
}

function add(){
    // ambil nilai dari text
    let jwb = document.getElementById('jwb')
   
    
    if(jwb.value === kuisSekarang.answer){
        updateJwbIndicator("benar"); 
        jwbbenar++;
        console.log("benar : "+jwbbenar);
       
    }
    else{
        updateJwbIndicator("salah") 

   
    }
    jwb.value ='';
    attempt++
    
     sudahjawab();

  
}
// disable button kirim jika sudah menjawab soal gais
function sudahjawab(){

const sudahjawab1 = document.getElementById("sudah");
sudahjawab1.classList.add("disable")

}
function buletIndikator(){
    
    buletIndicator1.innerHTML= '';
    const totalSoal = limitKuis;
    for( let i=0; i<totalSoal; i++){
        const indicator = document.createElement("div");
        buletIndicator1.appendChild(indicator)
    }
}
function updateJwbIndicator(markType){
   buletIndicator1.children[questionCounter-1].classList.add(markType ) 
}

function next(){
    if(questionCounter === limitKuis){
        kuisSelesai();
    }
    else{
        getNewQuestion();
        const sudahjawab1 = document.getElementById("sudah");
        sudahjawab1.classList.remove("disable")
    }
}

function kuisSelesai(){
    now.classList.add("hidden")
    result.classList.remove("hidden")
    kuisResult();
}
function kuisResult(){
    result.querySelector(".total-soal").innerHTML = limitKuis;
    result.querySelector(".attempt").innerHTML = attempt;
    result.querySelector(".benar").innerHTML = jwbbenar;
    result.querySelector(".salah").innerHTML =attempt - jwbbenar;
    const persentasi = (jwbbenar/limitKuis)*100;
    result.querySelector(".persentase").innerHTML = persentasi.toFixed(2)+"%";
    result.querySelector(".score").innerHTML =jwbbenar+"/"+limitKuis;
}
function resetKuis(){
    questionCounter =0;
    jwbbenar = 0;
    attempt = 0;
    kuisTersedia =[];
}
function TryAgain(){
    result.classList.add("hidden")
    start.classList.remove("hidden")
    resetKuis();
    startkuis();
}
function Home(){
    result.classList.add("hidden")
    start.classList.remove("hidden")
    resetKuis();
}
function startkuis(){
    start.classList.add("hidden")
    now.classList.remove("hidden")

    const sudahjawab1 = document.getElementById("sudah");
    sudahjawab1.classList.remove("disable")

setKuisTersedia();
getNewQuestion();
buletIndikator();

}
window.onload = function(){
    start.querySelector(".kerjakan").innerHTML = limitKuis
}