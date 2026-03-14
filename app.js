const canvas=new fabric.Canvas("canvas")

document.getElementById("upload").addEventListener("change",function(e){

const reader=new FileReader()

reader.onload=function(event){

fabric.Image.fromURL(event.target.result,function(img){

img.scaleToWidth(1280)

canvas.setBackgroundImage(img,canvas.renderAll.bind(canvas))

})

}

reader.readAsDataURL(e.target.files[0])

})

function addText(){

const text=document.getElementById("textInput").value

const textbox=new fabric.Textbox(text,{

left:400,
top:300,
fontSize:80,
fill:"white",
stroke:"black",
strokeWidth:2

})

canvas.add(textbox)

}

function addEmoji(){

const emoji=new fabric.Text("🔥",{

left:500,
top:300,
fontSize:120

})

canvas.add(emoji)

}

function download(){

const link=document.createElement("a")

link.download="thumbnail.png"

link.href=canvas.toDataURL({

format:"png"

})

link.click()

}
