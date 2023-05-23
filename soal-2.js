const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const gabung=()=>{
    let hewan=[...hewanBuas,...hewanJinak];
    console.log(hewan);
};
gabung();
const [ikan,wortel,beras] =hewanJinak;

const pemetaan= ((makanan)=>{
    if(makanan === "ikan"){
        return ikan
    }else if(makanan === "wortel"){
        return wortel
    }else if(makanan === "beras"){
        return beras
    }else{
        return "gada hewannya!"
    }
});
console.log(pemetaan("ikan"));