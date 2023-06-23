class NFT {
  constructor(branch , height , section , age ) {
    this.branch = branch;
    this.height = height;
    this.section = section;
    this.age = age;
  }
}

const nfts = [];
let count = 0;

function mintNFT(branch, height , section, age) {
  const nft = new NFT(branch, height , section, age);
  nfts.push(nft);
  count++;
}

function listNFTs() {
  console.log("The list of total NFTs:\n");
  for (let i = 0; i < count; i++) {
    console.log(nfts[i]);
  }
}

function getTotalSupply() {
  console.log("The total number of NFTs created by the user:");
  console.log(count);
}

mintNFT("CSE", "160cm", "BCG", "18");
mintNFT("CSE", "165", "AIML", "23");

listNFTs();
getTotalSupply();
