import ValidatedLoginForm from "./ValidatedLoginForm";
import NavBar from "./NavBar";
import HomePage from "./HomePage.css"



const header = document.querySelector(".header-container");

function Header() {
    ///create variables
  
    const header = document.createElement("div");
    const date = document.createElement("span");
    const title = document.createElement("h1");
    const logo= document.createElement("span");

  
    ///assign classes
    
    header.classList.add("header");
    date.classList.add("date");
    logo.classList.add("logo");
    title.classList.add("title");
  
    ///content
    
    date.textContent = "November 21, 2019";
    title.textContent = "Log In to Receipt Tracker";
  
    /////Append Elements
   
    header.appendChild(date);
    header.appendChild(title);
    //header.appendChild(temp);
  
    return header;
}
  
  header.appendChild(Header());


  //// Navigation Bar



function NavBar() {
      ///create variables
    const NavBar = document.createElement(".NavBar-container");
    
    ///assign classes
    NavBar.classList.add.add("navBar")
  
    ///content
    NavBar.textContent = "Log In", "Register", "Saved Receipts", "Create New Receipt";
  
  
    return NavBar;
}
    /////Append Elements
    NavBar.appendChild(NavBar);




    //// Log In Form

function ValidatedLoginForm() {
      
      ///create variables
    const ValidatedLoginForm = document.createElement(".form-container");
    
    ///assign classes
    form.classList.add.add("navBar")
  
    ///content
    ValidatedLoginForm.textContent = "Log In", "Password";
  
  
    return function NavBar() {
        ///create variables
      const NavBar = document.createElement(".NavBar-container");
      
      ///assign classes
      NavBar.classList.add.add("navBar")
    
      ///content
      NavBar.textContent = "Log In", "Register", "Saved Receipts", "Create New Receipt";
    
    
      return ValidatedLoginForm;
  }
      /////Append Elements
      NavBar.appendChild(NavBar);;
}
    /////Append Elements
    NavBar.appendChild(NavBar); = document.createElement(".NavBar-container");
      
      ///assign classes
      NavBar.classList.add.add("navBar")
    
      ///content
      NavBar.textContent = "Log In", "Register", "Saved Receipts", "Create New Receipt";
    
    
      return ValidatedLoginForm;
  }
      /////Append Elements
      ValidatedLoginForm.appendChild(ValidatedLoginForm);
  
  
export default HomePage