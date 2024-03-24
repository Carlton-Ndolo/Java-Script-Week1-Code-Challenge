        function Paye(taxablePay){
            if (taxablePay > 0 && taxablePay <= 24000){
                return 10/100 * taxablePay
            } 
            else if (taxablePay > 24000 && taxablePay <= 32333){
                return 25/100 *taxablePay
            }
            else if (taxablePay > 32333 && taxablePay <= 500000){
                return 30/100 * taxablePay
            }
            else if(taxablePay>500000 && taxablePay <= 800000){
                return 32.5/100 * taxablePay
            }
            else if(taxablePay>800000){
                return 35/100 * taxablePay
            }
        }

        console.log(Paye(70000));

        function NHIF(Pay){
            if (Pay > 0 && Pay <= 5999){
                return Pay - 150
            }
            else if (Pay >= 6000 && Pay < 8000){
                return Pay - 300
            }else if (Pay >= 8000 && Pay < 12000){
                return Pay - 400
            }else if (Pay >= 12000 && Pay < 15000){
                return Pay - 500
            }else if (Pay >= 15000 && Pay < 20000){
                return Pay - 600
            }else if (Pay >= 20000 && Pay < 25000){
                return Pay - 750
            }else if (Pay >= 25000 && Pay < 30000){
                return Pay - 850
            }
            else if (Pay >= 30000 && Pay < 35000){
                return Pay - 900  } 
            else if (Pay >= 35000 && Pay < 40000){
                return  950  }
            
            else if (Pay >= 40000 && Pay < 45000) {
                return 1000}
            else if (Pay >= 45000 && Pay < 50000) {
                return 1100;}
            else if (Pay >= 50000 && Pay < 60000) {
                return 1200;}
            else if (Pay >= 60000 && Pay < 70000) {
                 return 1300;}
            else if (Pay >= 70000 && Pay < 80000) {
                return 1400;}
            else if (Pay >= 80000 && Pay < 90000) {
                return  1500;}
            else if (Pay >= 90000 && Pay < 100000) {
                return  1600;}
            else {
                return 1700;
                    }   

            
        }
        console.log(NHIF(80000))

        function NSSF(PensionablePay){
            if(PensionablePay > 0 && PensionablePay <= 7000){
                return 6/100 * PensionablePay
            }
            else if(PensionablePay > 7000 && PensionablePay <= 36000){
                return 6/100 * PensionablePay
            }
            else{
                return 'Tier not found'
            }
        }
        console.log(NSSF(37000))

        function NetPay(){
            return 70000 - (Paye(70000) + NHIF(70000))
        }
        console.log(NetPay())
