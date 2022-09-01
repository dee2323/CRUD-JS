let courseName=document.getElementById("courseName");
let courseCategory=document.getElementById("courseCategory");
let coursePrice=document.getElementById("coursePrice");
let courseDescription=document.getElementById("courceDescription");
let data=document.getElementById("display");
let search=document.getElementById("search");
if(localStorage.getItem("alldata")!=null){
    courses = JSON.parse(localStorage.getItem("alldata"));
    displayCourses();
}else {
    courses =[];
}


function CreateCourses(){
    // console.log(courseName.value+courseCategory.value+coursePrice.value+courseDescription.value);
    course={
        name:courseName.value,
        category:courseCategory.value,
        price:coursePrice.value,
        description:courseDescription.value
    }
    courses.push(course);
    localStorage.setItem("alldata",JSON.stringify(courses));
    displayCourses();
    clearInput();
}
function clearInput(){
        courseName.value="";
        courseCategory.value="";
            coursePrice.value="";
            courseDescription.value="";
}
function displayCourses(){
    let result='';
    for(let i=0;i<courses.length;i++){
        result+=`
        <tr>
        
            <td>${i}</td>
            <td>${courses[i].name}</td>
            <td>${courses[i].price}</td>
            <td>${courses[i].category}</td>
            <td>${courses[i].description}</td>
            <td><button onclick="update(${i})"><i class="fas fa-edit"></i></button></td>
            <td><button onclick="deletInput(${i})"><i class="fas fa-trash"></i></button></td>
            
        
    </tr>`; 
    }
    data.innerHTML=result;
}

function deletInput(id){
courses.splice(id,1);
localStorage.setItem("alldata",JSON.stringify(courses));
displayCourses();
}
function update(i){
    
            courses[i].name=courseName.value;
    
        courses[i].price=courseCategory.value;
        
    courses[i].category=coursePrice.value;
    
        courses[i].description=courseDescription.value;
        localStorage.setItem("alldata",JSON.stringify(courses));
        displayCourses();
        clearInput();
    }
function searchCourse(){
    let searchValue=search.value;
    let result=``;
    for(let i=0;i<courses.length;i++){
        if(courses[i].name.toLowerCase().includes(searchValue.toLowerCase())){
            result+=`
            <tr>
            
                <td>${i}</td>
                <td>${courses[i].name}</td>
                <td>${courses[i].price}</td>
                <td>${courses[i].category}</td>
                <td>${courses[i].description}</td>
                <td><button onclick="update(${i})"><i class="fas fa-edit"></i></button></td>
                <td><button onclick="deletInput(${i})"><i class="fas fa-trash"></i></button></td>
                
            
        </tr>`; 
        }
    
    }
    data.innerHTML=result;
}
