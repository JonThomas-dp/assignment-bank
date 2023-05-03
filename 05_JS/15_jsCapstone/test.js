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

function selectStudent() {
    let randomNum = Math.floor(Math.random() * 100);
    let studentPoints = studentArray.length;
    let fractionalUnit = null
    
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
        console.log(studentArray[i]);
    }
    
    for(let i = 0; i < studentArray.length; i++) {
        if(studentArray[i]['min'] <= randomNum && randomNum <= studentArray[i]['max']){
            console.log(studentArray[i]['student']);
            console.log(randomNum);
        }
    }
}
