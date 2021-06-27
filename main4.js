(function () {

    const customerImage = document.querySelector('#customer-img')

    const customerName = document.querySelector('.customer-name')

    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
 
    let index = 0

    const customers = []
     
    function Customer(img , name ,text ) {
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img , name , text){
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img, name , text)
        customers.push(customer)
    
    
    }


    createCustomer(7, 'RIYA KUMARI ', 'Lorem ipsum dolor sit amet consectetur , doloremque tempore libero? Neque adipisci delectus nemo sed.')
    createCustomer(8, 'JONH  ', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nam debitis est reiciendis cumque quaerat ratione adipisci exercitationem, tempora placeat eveniet,')
    createCustomer(9, 'PRIYA SINGH ', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nam debitis est reiciendis cumque quaerat ratione adipisci exercitationem, tempora placeat eveniet, corporis, doloremque tempore libero? Neque adipisci delectus nemo sed.')

    console.log(customers)

    btn.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if(e.target.parentElement.classList.contains('prevBtn')){

                if(index === 0)
                {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text

            }

            if(e.target.parentElement.classList.contains('nextBtn')){

                index ++;

                if(index === customers.length)
                {
                    index = 0;
                }
         
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text

            }
           
        })
    })



})();