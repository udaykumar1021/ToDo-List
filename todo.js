let input=prompt("what would you like to do?");
const todos=["collect eggs","clear box"];
while(input!=='quit' && input!=='q' ){
    if(input==='list'){
        console.log("**********");
        for(let i=0;i<todos.length;i++){
            console.log(`${i}:${todos[i]}`);
        }
        console.log("**********");
    }else if(input==='new'){
        const newTodo=prompt("OK,What's the new Todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }else if(input==='delete'){
        const index=parseInt(prompt('OK,Enter an index to delete!'));
        if(!Number.isNaN(index)){
            const deleted=todos.splice(index,1);
            console.log(`OK,${deleted[0]} deleted`);
        }else{
            console.log("Unknown Index");
        }
    }
    input=prompt("what would you like to do?")
}
console.log("OK! LETS QUIT!!")