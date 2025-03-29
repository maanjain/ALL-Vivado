// now its JAVASCRIPT time
/**Things to do
 * change buttons
 * then change image , name , stars , paragrapgh
 */
console.log("maan jain ")(function () {
  const customerimage = document.querySelector("#firstphoto");
  const customername = document.querySelector("#customer-name");
  const customertext = document.querySelector("#customer-text");

  // importing buttons
  const btn = document.querySelector(".btn");
  let index = 0;
  const customers = [];

  function customer(img, name, text) {
    // to taget each and everyelements of it all- when clicking on button you have
    //to change the buttons on it
    this.img = img;
    this.name = name;
    this.text = text;
  }
  function createcustomer(img, name, text) {
    let img = "./image/${img}.jpg";
    // changing name

    let customer = new customer(img, name, text);
    customers.push(customer);
  }
  // creating customers
  createcustomer(
    0,
    "jonny",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam consectetur rem, maxime repudiandae assumenda, reiciendis natus dicta, dignissimos laborum deleniti quia necessitatibus non quisquam similique illo veritatis quos qui ab! Id esse sed deserunt nobis rerum."
  );
  createcustomer(
    1,
    "ammy",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam consectetur rem, maxime repudiandae assumenda, reiciendis natus dicta, dignissimos laborum deleniti quia necessitatibus non quisquam similique illo veritatis quos qui ab! Id esse sed deserunt nobis rerum."
  );
  createcustomer(
    2,
    "scarlet",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam consectetur rem, maxime repudiandae assumenda, reiciendis natus dicta, dignissimos laborum deleniti quia necessitatibus non quisquam similique illo veritatis quos qui ab! Id esse sed deserunt nobis rerum."
  );
  createcustomer(
    3,
    "jimmy",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam consectetur rem, maxime repudiandae assumenda, reiciendis natus dicta, dignissimos laborum deleniti quia necessitatibus non quisquam similique illo veritatis quos qui ab! Id esse sed deserunt nobis rerum."
  );

  // main basic -LOGICs

  btn.foreach(function (button) {
    button.addEventListner("click", function (e) {
      if (e.target.parentElement.classList.contains("previous")) {
        if (index === 0) {
          index = customers.length;
        }
        index--;
        customerimage.src = customers[index].img;
        customername.textContent = customers[index].name;
        customertext.textContent = customers[index].text;
      }
      if (e.target.parentElement.classList.contains("next")) {
        index++;
        if (index === customer.length) {
          index = 0;
        }

        customerimage.src = customers[index].img;
        customername.textContent = customers[index].name;
        customertext.textContent = customers[index].text;
      }
    });
  });
})();
