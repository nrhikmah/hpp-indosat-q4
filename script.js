var cb_newsp0 = 0;
var cb_newsp2000 = 2000;
var cb_newsp7000 = 7000;
var cb_newsp10000 = 10000;
var cb_top_produk0 = 0;
var cb_top_produk300 = 300;
var cb_top_produk500 = 500;
var cb_top_produk2500 = 2500;
var cb_taging0 = 0;
var cb_taging500 = 500;
var cb_taging1000 = 1000;
var cb_taging2000 = 2000;
var cb_taging7000 = 7000;
var cb_taging8000 = 8000;
var cb_taging12000 = 12000;
var flashsale0 = 0
var flashsale500 = 500;
var flashsale1000 = 1000;
var freesp = 2250;

// sultan
var cb_inject_vc0 = 0;
var cb_inject_vc = 1000;
var cb_redeem_vc0 = 0;
var cb_redeem_vc300 = 300;
var cb_redeem_vc500 = 500;
var cb_rebuy0 = 0;
var cb_rebuy500 = 500;
var cb_rebuy1000 = 1000;
var cb_rebuy3000 = 3000;
var cb_rebuy5500 = 5500;

function jawara100k(input) {
    return input*(4/100);
}

function jawara1jt(input) {
    return input*(6/100);
}

function jawara10jt(input) {
    return input*(8/100);
}

function jawara100jt(input) {
    return input*(10/100);
}

function loyalti(input) {
    return input*(3/100);
}

function sultan_basic(input) {
    return input*(0.035);
}

function sultan_premium125(input){
    return input*(0.036);
}

function sultan_premium1M(input){
    return input*(0.038);
}

function sultan_premium4M(input){
    return input*(0.04);
}

function loyalty_sultan_basic(input) {
    return input*(0.01);
}

function loyalty_sultan_premium(input) {
    return input*(0.01);
}


function total_modal(mobo,sp,pcs) {
    return (parseInt(mobo) + parseInt(sp))*parseInt(pcs);
}


function hpp(paket,program,mobo,sp,pcs) {
    if (paket == "yellow1") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else{
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non)+(total_cb_non*(6/100))
        }
    }

    else if (paket == "yellow2") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else {
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non)+(total_cb_non*(6/100))
        }
    }

    else if (paket == "sachet1") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy0;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy0;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy0;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy0;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else {
            var modal = total_modal(mobo,sp,pcs)
            return modal 
        }
       
    }

    else if (paket == "sachet2") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy1000;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else{
            var modal = total_modal(mobo,sp,pcs)
            return modal 
        }
        
    }

    else if (paket == "sachet4") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy1000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy1000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy1000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else{
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non)+(total_cb_non*(6/100))
        }
    }

    else if (paket == "sachet5") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }
        else{
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non)+(total_cb_non*(6/100))
        }
    }

    else if (paket == "sachet7") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }
        else{
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non)+(total_cb_non*(6/100))
        }
    }

    else if (paket == "fi3") {
        if (program == "jwr100k") {
            var jawara = jawara100k(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk500 + cb_taging1000 + flashsale500;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }

        else if (program == "jwr1jt") {
            var jawara = jawara1jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk500 + cb_taging1000 + flashsale500;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }

        else if (program == "jwr10jt") {
            var jawara = jawara10jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk500 + cb_taging1000 + flashsale500;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }

        else if (program == "jwr100jt") {
            var jawara = jawara100jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk500 + cb_taging1000 + flashsale500;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }

        else if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }

        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }
    }

    else if (paket == "fi5") {
        if (program == "jwr100k") {
            var jawara = jawara100k(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging1000 + flashsale500;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else if (program == "jwr1jt") {
            var jawara = jawara1jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging1000 + flashsale500;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else if (program == "jwr10jt") {
            var jawara = jawara10jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging1000 + flashsale500;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else if (program == "jwr100jt") {
            var jawara = jawara100jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging1000 + flashsale500;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }

        else if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }
    }

    else if (paket == "fi13") {
        if (program == "jwr100k") {
            var jawara = jawara100k(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp7000 + cb_top_produk0 + cb_taging7000 + flashsale1000;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr1jt") {
            var jawara = jawara1jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp7000 + cb_top_produk0 + cb_taging7000 + flashsale1000;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr10jt") {
            var jawara = jawara10jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp7000 + cb_top_produk0 + cb_taging7000 + flashsale1000;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr100jt") {
            var jawara = jawara100jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp7000 + cb_top_produk0 + cb_taging7000 + flashsale1000;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }

        else if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }
        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }
    }

    else if (paket == "fi21") {
        if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }
    }

    else if (paket == "fi25") {
        if (program == "jwr100k") {
            var jawara = jawara100k(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp10000 + cb_top_produk2500 + cb_taging12000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr1jt") {
            var jawara = jawara1jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp10000 + cb_top_produk2500 + cb_taging12000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr10jt") {
            var jawara = jawara10jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp10000 + cb_top_produk2500 + cb_taging12000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr100jt") {
            var jawara = jawara100jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp10000 + cb_top_produk2500 + cb_taging12000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }

        else if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }
    }

    else if (paket == "fi30") {
        if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }
    }

    else if (paket == "fi42") {
        if (program == "jwr100k") {
            var jawara = jawara100k(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp10000 + cb_top_produk0 + cb_taging12000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr1jt") {
            var jawara = jawara1jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp10000 + cb_top_produk0 + cb_taging12000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr10jt") {
            var jawara = jawara10jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp10000 + cb_top_produk0 + cb_taging12000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr100jt") {
            var jawara = jawara100jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp10000 + cb_top_produk0 + cb_taging12000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }

        else if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }
    }

    else if (paket == "fi10") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }
        else{
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non)+(total_cb_non*(6/100))
        }  
    }

    else if (paket == "fi26") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else {
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non)+(total_cb_non*(6/100))
        } 
    }

    else if (paket == "fi4") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }
    
        else {
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non)+(total_cb_non*(6/100))
        } 
    }

    else if (paket == "fi15") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else {
        var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
        var modal = total_modal(mobo,sp,pcs)
        return modal -(total_cb_non)+(total_cb_non*(6/100))
        }
    }
    
    else if (paket == "fi39") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else{
        var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
        var modal = total_modal(mobo,sp,pcs)
        return modal -(total_cb_non)+(total_cb_non*(6/100))
        }
    }

    else if (paket == "fi63") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else{
        var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
        var modal = total_modal(mobo,sp,pcs)
        return modal -(total_cb_non)+(total_cb_non*(6/100))
        }
    }

    else if (paket == "fkh7") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else {
        var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
        var modal = total_modal(mobo,sp,pcs)
        return modal -(total_cb_non)+(total_cb_non*(6/100))
        }
    }

    else if (paket == "fkh14") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }
        
        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else{
        var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
        var modal = total_modal(mobo,sp,pcs)
        return modal -(total_cb_non)+(total_cb_non*(6/100))
        }
    }

    else if (paket == "fkh28") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else {
        var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
        var modal = total_modal(mobo,sp,pcs)
        return modal -(total_cb_non)+(total_cb_non*(6/100))
        }
    }

    else if (paket == "fc6") {
        if (program == "jwr100k") {
            var jawara = jawara100k(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging1000 + flashsale500;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else if (program == "jwr1jt") {
            var jawara = jawara1jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging1000 + flashsale500;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else if (program == "jwr10jt") {
            var jawara = jawara10jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging1000 + flashsale500;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else if (program == "jwr100jt") {
            var jawara = jawara100jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging1000 + flashsale500;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
    
        else if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }
    }

    else if (paket == "fc10") {
        if (program == "jwr100k") {
            var jawara = jawara100k(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging7000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr1jt") {
            var jawara = jawara1jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging7000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr10jt") {
            var jawara = jawara10jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging7000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr100jt") {
            var jawara = jawara100jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging7000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }

        else if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }
    }

    else if (paket == "fc20") {
        if (program == "jwr100k") {
            var jawara = jawara100k(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp7000 + cb_top_produk300 + cb_taging7000 + flashsale1000;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr1jt") {
            var jawara = jawara1jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp7000 + cb_top_produk300 + cb_taging7000 + flashsale1000;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr10jt") {
            var jawara = jawara10jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp7000 + cb_top_produk300 + cb_taging7000 + flashsale1000;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr100jt") {
            var jawara = jawara100jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp7000 + cb_top_produk300 + cb_taging7000 + flashsale1000;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }

        else if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        
    }

    else if (paket == "fc30") {
        if (program == "jwr100k") {
            var jawara = jawara100k(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp10000 + cb_top_produk0 + cb_taging12000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr1jt") {
            var jawara = jawara1jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp10000 + cb_top_produk0 + cb_taging12000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr10jt") {
            var jawara = jawara10jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp10000 + cb_top_produk0 + cb_taging12000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr100jt") {
            var jawara = jawara100jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp10000 + cb_top_produk0 + cb_taging12000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }

        else if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }
    }

    else if (paket == "fc40") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else {
        var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
        var modal = total_modal(mobo,sp,pcs)
        return modal -(total_cb_non)+(total_cb_non*(6/100))
        }
    }

    else if (paket == "fu1") {
        if (program == "jwr100k") {
            var jawara = jawara100k(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging1000 + flashsale500;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else if (program == "jwr1jt") {
            var jawara = jawara1jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging1000 + flashsale500;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else if (program == "jwr10jt") {
            var jawara = jawara10jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging1000 + flashsale500;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else if (program == "jwr100jt") {
            var jawara = jawara100jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging1000 + flashsale500;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
    
        else if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }
    }

    else if (paket == "fu2") {
        if (program == "jwr100k") {
            var jawara = jawara100k(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else if (program == "jwr1jt") {
            var jawara = jawara1jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else if (program == "jwr10jt") {
            var jawara = jawara10jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else if (program == "jwr100jt") {
            var jawara = jawara100jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }

        else if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }
    
        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }
    }

    else if (paket == "fu3") {
        if (program == "jwr100k") {
            var jawara = jawara100k(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp7000 + cb_top_produk500 + cb_taging7000 + flashsale1000;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr1jt") {
            var jawara = jawara1jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp7000 + cb_top_produk500 + cb_taging7000 + flashsale1000;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr10jt") {
            var jawara = jawara10jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp7000 + cb_top_produk500 + cb_taging7000 + flashsale1000;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr100jt") {
            var jawara = jawara100jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp7000 + cb_top_produk500 + cb_taging7000 + flashsale1000;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }

        else if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }
    }

    else if (paket == "fu7") {
        if (program == "jwr100k") {
            var jawara = jawara100k(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp10000 + cb_top_produk2500 + cb_taging12000 + flashsale1000;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr1jt") {
            var jawara = jawara1jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp10000 + cb_top_produk2500 + cb_taging12000 + flashsale1000;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr10jt") {
            var jawara = jawara10jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp10000 + cb_top_produk2500 + cb_taging12000 + flashsale1000;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }
        else if (program == "jwr100jt") {
            var jawara = jawara100jt(mobo);
            var loyalty = loyalti(mobo);
            var total_cb_non = cb_newsp10000 + cb_top_produk2500 + cb_taging12000 + flashsale1000;
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_cb_non + jawara + loyalty + freesp) + ((total_cb_non + jawara + loyalty)*6/100)
        }

        else if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc0
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy500;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }
    }

    else if (paket == "fu10") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else {
        var jawara = 0
        var loyalty = loyalti(mobo)
        var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
        var modal = total_modal(mobo,sp,pcs)
        // return modal -(total_cb_non)+(total_cb_non*(6/100))
        return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
    }

    else if (paket == "fujb") {
        if (program == "sltbvoucher") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc500
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - total_sultan - total_cb + pph
        }
        else if (program == "sltbrebuy") {
            var sultan = sultan_basic(mobo);
            var loyalty = loyalty_sultan_basic(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy5500;
            var pph = (total_sultan + cashback_rebuy) * 0.06
            return mobo - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp125voucher") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + total_cb) + pph
        }

        else if (program == "sltp125rebuy") {
            var sultan = sultan_premium125(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp1mvoucher") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp1mrebuy") {
            var sultan = sultan_premium1M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else if (program == "sltp4mvoucher") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var total_cb = cb_inject_vc0+cb_redeem_vc300
            var pph = (total_sultan + total_cb) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan) + pph
        }

        else if (program == "sltp4mrebuy") {
            var sultan = sultan_premium4M(mobo);
            var loyalty = loyalty_sultan_premium(mobo);
            var total_sultan = sultan+loyalty
            var cashback_rebuy = cb_rebuy3000;
            var pph = (loyalty + cashback_rebuy) * 0.06
            var modal = total_modal(mobo,sp,pcs)
            return modal - (total_sultan + cashback_rebuy) + pph
        }

        else{
        var jawara = 0
        var loyalty = loyalti(mobo)
        var total_cb_non = cb_newsp2000 + cb_top_produk0 + cb_taging0 + flashsale0;
        var modal = total_modal(mobo,sp,pcs)
        return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
    }

    else if (paket == "sp16") {
        if (program == "jwr100k") {
            var jawara = jawara100k(sp);
            var loyalty = loyalti(sp);
            var total_cb_non = cb_newsp0 + cb_top_produk0 + cb_taging8000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else if (program == "jwr1jt") {
            var jawara = jawara1jt(sp);
            var loyalty = loyalti(sp);
            var total_cb_non = cb_newsp0 + cb_top_produk0 + cb_taging8000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else {
            var jawara = 0;
            var loyalty = loyalti(sp);
            var total_cb_non = cb_newsp0 + cb_top_produk0 + cb_taging8000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
    }

    else if (paket == "sp8") {
        if (program == "jwr100k") {
            var jawara = jawara100k(sp);
            var loyalty = loyalti(sp);
            var total_cb_non = cb_newsp0 + cb_top_produk0 + cb_taging2000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else if (program == "jwr1jt") {
            var jawara = jawara1jt(sp);
            var loyalty = loyalti(sp);
            var total_cb_non = cb_newsp0 + cb_top_produk0 + cb_taging2000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else {
            var jawara = 0;
            var loyalty = loyalti(sp);
            var total_cb_non = cb_newsp0 + cb_top_produk0 + cb_taging2000 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
    }

    else if (paket == "sp2") {
        if (program == "jwr100k") {
            var jawara = jawara100k(sp);
            var loyalty = loyalti(sp);
            var total_cb_non = cb_newsp0 + cb_top_produk0 + cb_taging500 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else if (program == "jwr1jt") {
            var jawara = jawara1jt(sp);
            var loyalty = loyalti(sp);
            var total_cb_non = cb_newsp0 + cb_top_produk0 + cb_taging500 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
        else {
            var jawara = 0;
            var loyalty = loyalti(sp);
            var total_cb_non = cb_newsp0 + cb_top_produk0 + cb_taging500 + flashsale0;
            var modal = total_modal(mobo,sp,pcs)
            return modal -(total_cb_non+jawara+loyalty)+((total_cb_non+jawara+loyalty)*6/100)
        }
    }
}
function hitung() {
    var mobo = (document.getElementById("mobo").value);
    var sp = (document.getElementById("sp").value);
    var pcs = (document.getElementById("pcs").value);
    var select_paket = document.getElementById('paket');
    var select_program = document.getElementById('program');
    var paket = select_paket.options[select_paket.selectedIndex].value;
    var program = select_program.options[select_program.selectedIndex].value;
    

    document.getElementById("modal").innerHTML = total_modal(mobo,sp,pcs);
    document.getElementById("hasil2").innerHTML =Math.round(hpp(paket,program,mobo,sp,pcs));
}

function resetButton() {
    document.getElementById("myForm").reset();
    document.getElementById("hasil1").innerHTML = " ";
    document.getElementById("hasil2").innerHTML = " ";
    document.getElementById("hasil3").innerHTML = " ";
    document.getElementById("hasil4").innerHTML = " ";
}