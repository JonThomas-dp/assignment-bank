function selectStudent() {
    let randomNum = Math.floor(Math.random() * 100);
    let studentPoints = studentArray.length;
    let fractionalUnit = null
    let selectedStudent = null;

    for(let i = 0; i < studentArray.length; i++) {
        studentPoints = studentPoints + studentArray[i]['priority']
    }
    
    fractionalUnit = 100 / studentPoints
    
    studentArray[0]['min'] = 0
    studentArray[0]['max'] = fractionalUnit - 1 
    
    for(let i = 1; i < studentArray.length; i++) {
        if(studentArray[i]['priority'] === 0) {
            studentArray[i]['min'] = studentArray[`${i - 1}`]['max'] + 1
            studentArray[i]['max'] = studentArray[i]['min'] + fractionalUnit - 1
        } else {
            studentArray[i]['min'] = studentArray[`${i - 1}`]['max'] + 1
            studentArray[i]['max'] = studentArray[i]['min'] + (fractionalUnit * studentArray[i]['priority']) - 1
        }
    }
    
    for(let i = 0; i < studentArray.length; i++){
        studentArray[i]['min'] = Math.floor(studentArray[i]['min']);
        studentArray[i]['max'] = Math.floor(studentArray[i]['max']);
    }
    
    for(let i = 0; i < studentArray.length; i++) {
        if(studentArray[i]['min'] <= randomNum && randomNum <= studentArray[i]['max']){
            console.log(`${studentArray[i]['student']} was chosen. Random Number was ${randomNum}.`)
            console.log(studentArray[i])
            selectedStudent = studentArray[i]['student']
        }
    }
    return selectedStudent
}

let chosenStudent = document.querySelector(".generator-chosen-student")
let studentArray = [
    {
        student: "student1",
        priority: 0,
        min: null,
        max: null
    },
    {
        student: "student2",
        priority: 0,
        min: null,
        max: null
    },
    {
        student: "student3",
        priority: 0,
        min: null,
        max: null
    },
    {
        student: "student4",
        priority: 0,
        min: null,
        max: null
    },
    {
        student: "student5",
        priority: 0,
        min: null,
        max: null
    },
    {
        student: "student6",
        priority: 0,
        min: null,
        max: null
    },
    {
        student: "student7",
        priority: 0,
        min: null,
        max: null
    },
    {
        student: "student8",
        priority: 0,
        min: null,
        max: null
    },
    {
        student: "student9",
        priority: 0,
        min: null,
        max: null
    },
    {
        student: "student10",
        priority: 0,
        min: null,
        max: null
    },
    {
        student: "student11",
        priority: 0,
        min: null,
        max: null
    },
    {
        student: "student12",
        priority: 0,
        min: null,
        max: null
    },
    {
        student: "student13",
        priority: 0,
        min: null,
        max: null
    },
    {
        student: "student14",
        priority: 0,
        min: null,
        max: null
    },
    {
        student: "student15",
        priority: 0,
        min: null,
        max: null
    }
]

for(let i = 0; i < studentArray.length; i++) {
    let studentContainer = document.querySelector(".student-container")
    let studentNameContainer = document.createElement("div");
    let studentName = document.createElement("h3");
    let priorityValue = document.createElement("h3");
    let priorityButtonMinus = document.createElement("button");
    let priorityButtonPlus = document.createElement("button");

    studentNameContainer.classList.add("student-name-container");
    studentName.classList.add("student-name");
    priorityValue.classList.add("priority-value")
    priorityValue.classList.add(`priority-user${i}`);
    priorityButtonMinus.classList.add("priority-button");
    priorityButtonMinus.classList.add(`priority-button-minus${i}`);
    priorityButtonPlus.classList.add("priority-button");
    priorityButtonPlus.classList.add(`priority-button-plus${i}`);

    studentName.innerHTML = studentArray[i]["student"];
    priorityValue.innerHTML = studentArray[i]['priority'];
    priorityButtonMinus.innerHTML = "-";
    priorityButtonPlus.innerHTML = "+";

    studentNameContainer.appendChild(studentName);
    studentNameContainer.appendChild(priorityValue);
    studentNameContainer.appendChild(priorityButtonMinus);
    studentNameContainer.appendChild(priorityButtonPlus);
    studentContainer.appendChild(studentNameContainer);

    document.querySelector(`.priority-button-minus${i}`).addEventListener("click", function() {
        if(priorityButtonMinus) {
            if(studentArray[i]["priority"] === 0) {

            } else {studentArray[i]["priority"] = Number(studentArray[i]["priority"]) - 1;
            document.querySelector(`.priority-user${i}`).innerHTML = studentArray[i]["priority"];
        }
        } else {
            console.log(Error('could not lower number using minus button'))
        }
    });

    document.querySelector(`.priority-button-plus${i}`).addEventListener("click", function() {
        if(priorityButtonMinus) {
            if(studentArray[i]["priority"] === 10) {

            } else {
                studentArray[i]["priority"] = Number(studentArray[i]["priority"]) + 1;
                document.querySelector(`.priority-user${i}`).innerHTML = studentArray[i]["priority"];
            }
        } else {
            console.log(Error('could not lower number using minus button'))
        }
    });
}

document.querySelector(".generator-app-button").addEventListener("click", () => {
  let selectedStudent = selectStudent()
  chosenStudent.innerHTML = selectedStudent;  
})

