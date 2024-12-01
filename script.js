solvefor.addEventListener("input", updateInputs)

function updateInputs() {
    inputs.innerHTML = ""
    let list
    if(solvefor.value == "area") {
        list = [
            {i: "r", p:"radius (r)"},
            {i: "d", p: "diameter (d)"},
            {i: "c", p: "circumference (c)"}
        ]
    }
    if(solvefor.value == "circumference") {
        list = [
            {i: "d", p: "diameter (d)"},
            {i: "r", p:"radius (r)"},
            {i: "a", p: "area (a)"}
        ]
    }
    if(solvefor.value == "diameter") {
        list = [
            {i: "r", p:"radius (r)"},
            {i: "c", p: "circumference (c)"},
            {i: "a", p: "area (a)"}
        ]
    }
    if(solvefor.value == "radius") {
        list = [
            {i: "d", p: "diameter (d)"},
            {i: "c", p: "circumference (c)"},
            {i: "a", p:"area (a)"}
        ]
    }
    list.forEach((i) => {
        let e = document.createElement("input")
        e.id = i.i
        e.placeholder = i.p
        e.type = "number"
        inputs.appendChild(e)
    })
}

updateInputs()

var explain = document.createElement('p')
calc.addEventListener("click", () => {
    outputbox.innerHTML = ""
    //area
    if(solvefor.value == "area") {
        if(r.value !== "") {
            explain.innerText = "Solving for area with radius:\n\na = πr^2 = π⋅r⋅r"
            outputbox.appendChild(explain)
    
            show(Math.PI*r.value*r.value, "a")
        } else if(d.value !== "") {
            explain.innerText = "Solving for area with diameter:\n\nr = d/2 = "+d.value/2+"\na = πr^2 = π⋅r⋅r"
            outputbox.appendChild(explain)
    
            show(Math.PI*Math.pow(d.value/2, 2), "a")
        } else if(c.value !== "") {
            explain.innerText = "Solving for area with circumference:\n\nd = c/π = "+c.value/Math.PI+"\nr = d/2 = "+(c.value/Math.PI)/2+"\na = πr^2 = π⋅r⋅r"
            outputbox.appendChild(explain)
    
            show(Math.PI*Math.pow((c.value/Math.PI)/2, 2), "a")
        }
    }
    //circumference
    if(solvefor.value == "circumference") {
        if(d.value !== "") {
            explain.innerText = "Solving for circumference with diameter:\n\nc = πd"
            outputbox.appendChild(explain)
    
            show(Math.PI*d.value, "c")
        } else if(r.value !== "") {
            explain.innerText = "Solving for circumference with radius:\n\nc = π2r = πd"
            outputbox.appendChild(explain)
    
            show(Math.PI*r.value*2, "c")
        } else if(a.value !== "") {
            explain.innerText = "Solving for circumference with area:\n\nr = √πa = "+Math.sqrt(Math.PI*a.value)+"\nc = π2r"
            outputbox.appendChild(explain)
    
            show(Math.sqrt(Math.PI*a.value)*2, "c")
        }
    }
    //diameter
    if(solvefor.value == "diameter") {
        if(r.value !== "") {
            explain.innerText = "Solving for diameter with radius:\n\nd = 2r"
            outputbox.appendChild(explain)
    
            show(2*r.value, "d", '=')
        } else if(c.value !== "") {
            explain.innerText = "Solving for diameter with circumference:\n\nd = c/π"
            outputbox.appendChild(explain)
    
            show(c.value/Math.PI, "d")
        } else if(a.value !== "") {
            explain.innerText = "Solving for diameter with area:\n\nr = √a/π = "+Math.sqrt(a.value/Math.PI)+"\nd = 2r"
            outputbox.appendChild(explain)
    
            show(2*Math.sqrt(a.value/Math.PI), "d")
        } 
    }
    //radius
    if(solvefor.value == "radius") {
        if(d.value !== "") {
            explain.innerText = "Solving for radius with diameter:\n\nr = d/2"
            outputbox.appendChild(explain)
    
            show(d.value/2, "r", '=')
        } else if(c.value !== "") {
            explain.innerText = "Solving for radius with circumference:\n\nd = c/π = "+c.value/Math.PI+"\nr = d/2"
            outputbox.appendChild(explain)
    
            show(c.value/Math.PI/2, "r")
        } else if(a.value !== "") {
            explain.innerText = "Solving for radius with area:\n\nr = √πa = "+Math.sqrt(Math.PI*a.value)
            outputbox.appendChild(explain)
    
            show(Math.sqrt(a.value/Math.PI), "r")
        } 
    }
})

function show(val, get, symb="≈") {
    let output = document.createElement("span")
    output.style = "margin-bottom: 3vh;"
    output.style.fontWeight = 800
    output.innerText = get+" "+symb+" "+val
    outputbox.appendChild(output)
}