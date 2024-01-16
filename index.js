const navLinks = document.querySelector('.nav-links')
const linkElements = navLinks.querySelectorAll('a')
const analytics = linkElements[3]
const recentOrders = document.querySelector('.recent-orders')
const table = document.createElement("table")
recentOrders.appendChild(table)

table.innerHTML = `
    <thead>
        <tr>
            <th>Course Name</th>
            <th>Course Number</th>
            <th>Payment</th>
            <th>Status</th>
            <th></th>
        </tr>
    </thead>

    <tbody></tbody>
`

const tbody = document.querySelector('tbody')

linkElements.forEach((value)=>{
    value.addEventListener('mouseover',()=>{
       linkElements.forEach((value)=>{
            if(value.classList.contains('active')){
                value.classList.remove('active')
            }
       })
       value.classList.add('active')
    })
})

linkElements.forEach((value)=>{
    value.addEventListener('mouseout',()=>{
          value.classList.remove('active')
          analytics.classList.add('active')
    })
})

orders.forEach((value)=>{
    const tableRow = document.createElement("tr")
    tableRow.innerHTML = `
        <td>${value.courseName}</td>
        <td>${value.courseNumber}</td>
        <td>${value.payment}</td>
        <td class = "status">${value.status}</td>
        <td class = "details">Details</td>
    `
    tbody.appendChild(tableRow)
})

const td = tbody.querySelectorAll('td')

td.forEach((value)=>{
    if(value.textContent == "Pending")
    {
        value.classList.add("pending")
    }
    else if(value.textContent == "Declined")
    {
        value.classList.add("declined")
    }
    else if(value.textContent == "Active")
    {
        value.classList.add("active")
    }
    else{
        return value
    }
})

const darkModeBtn = document.querySelector('.container > header button')
const darkBtn = document.querySelector('.right .header-contents button')
const darkModeIcons = darkModeBtn.querySelectorAll('i')
const darkIcons = darkBtn.querySelectorAll('i')

darkModeBtn.addEventListener('click',()=>{
    darkModeIcons.forEach(value)
    document.body.classList.toggle('darkmodevariables')
})

darkBtn.addEventListener('click',()=>{
    darkIcons.forEach(value)
    document.body.classList.toggle('darkmodevariables')
})

function value(value){
    value.classList.toggle('on')
    value.classList.toggle('off')
}

const menuBtn = document.querySelector('.menu')
const closeBtn = document.querySelector('.cross')
const aside = document.querySelector('aside')

menuBtn.addEventListener('click',()=>{
    aside.classList.add('move')
})

closeBtn.addEventListener('click',()=>{
    aside.classList.remove('move')
})



