let name = "Brenda Kaye";

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");


function parseAndDisplayName(name) {
    let space = name.indexOf(" ");
    
    console.log(`Name: ${name}`);
    
    let firstName = name.substring(0,space);
    console.log(`First Name: ${firstName}`);
    
    let lastName = name.substring(space+1);
    console.log(`Last Name: ${lastName}`);
    console.log(`------------------------------\n`);
}