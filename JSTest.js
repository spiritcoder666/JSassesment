/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT ({name, debut, blessings, rank, SECT}) {
    const NFT = {
        "name": name,
        "debut":debut,
        "blessings": blessings,
        "rank": rank,
        "SECT": SECT
    }
    NFTs.push(NFT);
    console.log("Minted: " + name);
} 

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i< NFTs.length; i++){
        console.log("\nID: \t\t" + (i + 1));
        console.log("Name: \t\t" + NFTs[i]["name"]);
        console.log("debut: \t\t" + NFTs[i]["debut"]);
        console.log("blessings: \t" + NFTs[i]["blessings"]);
        console.log("rank: \t\t" + NFTs[i]["rank"]);
        console.log("SECT: \t\t" + NFTs[i]["SECT"]);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log( "\n" + NFTs["length"]);
}
  

// call your functions below this line

mintNFT({
    name: "Cyan Vert",
    debut: " 2024",
    blessings: "blessing of god of death",
    rank: "Demigod",
    SECT:  "NO sect"
});
mintNFT({
    name: "Spirit Farmer",
    debut: " 2023",
    blessings: "blessings of nature and spirit god",
    rank: "Overpowerd",
    SECT:  "Elven village of great forest"
});
mintNFT({
    name: "Zion Agnes",
    debut: " 2022.",
    blessings: "blessings of Blackstar",
    rank: "SS-rank",
    SECT:  "Imperial family"
});
mintNFT({
    name: "Nox Von Rehlfeim",
    debut: " 2021",
    blessings: "blessing of dark god",
    rank: "SSS-rank",
    SECT:  "Dark Sword Sect"
});
listNFTs();
getTotalSupply();
