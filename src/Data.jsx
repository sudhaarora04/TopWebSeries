
  function getDataRecords(){
    let props  = [];
    props.push(getDataObjectRecord("its okay to not be Okay", '/img/its_okay_to_not_okay.jpg', "https://www.netflix.com/in/title/81243992", "An extraordinary road to emotional healing opens up for an antisocial children's book writer and a selfless psych ward caretaker when they cross paths."));
    props.push(getDataObjectRecord("Money Heist", '/img/money_heist.jpg', "https://www.netflix.com/in/title/80192098", "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan."));
    props.push(getDataObjectRecord("Emily in Paris", '/img/emily_in paris.jpg', "https://www.netflix.com/in/title/81037371", "After landing her dream job in Paris, Chicago marketing exec Emily Cooper embraces her adventurous new life while juggling work, friends and romance."));
    props.push(getDataObjectRecord("House of Cards", '/img/house_of_cards.jpg', "https://www.netflix.com/in/title/70178217", "A ruthless politician will stop at nothing to conquer Washington, D.C., in this Emmy and Golden Globe-winning political drama."));
    props.push(getDataObjectRecord("The Crown", '/img/the_crown.jpg', "https://www.netflix.com/in/title/80025678", "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century."));
    props.push(getDataObjectRecord("Dark", '/img/dark.jpg', "https://www.netflix.com/in/title/80100172", "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations."));
    props.push(getDataObjectRecord("Ludo", '/img/ludo.jpg', "https://www.netflix.com/in/title/81107576", "From a resurfaced sex tape to a rogue suitcase of money, four wildly different stories overlap at the whims of fate, chance and one eccentric criminal."));
    props.push(getDataObjectRecord("Shadowhunters: The Mortal Instruments", '/img/shadowhunters.jpg', "https://www.netflix.com/in/title/80084447", "The life of typical teen Clary Fray is upended when she learns that she's part of a race of demon-hunting humans who have the blood of angels."));
    props.push(getDataObjectRecord("Orange Is the New Black", '/img/orangeisthenewblack.jpg', "https://www.netflix.com/in/title/70242311", "When a past crime catches up with her, a privileged New Yorker ends up in a women's prison, where she quickly makes friends and foes."));
    props.push(getDataObjectRecord("The Witcher", '/img/thewitcher.jpg', "https://www.netflix.com/in/title/80189685", "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts."));
    props.push(getDataObjectRecord("Sacred Games", '/img/scaredgames.jpg', "https://www.netflix.com/in/title/80115328", "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm."));
    props.push(getDataObjectRecord("The Queen's Gambit", '/img/queengambit.jpg', "https://www.netflix.com/in/title/80234304", "In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction."));
    
    return props;
  }

/**
 * method to return data object
 * @param {*} title 
 * @param {*} imgsrc 
 * @param {*} link 
 * @param {*} shortdes 
 */
  function getDataObjectRecord(title, imgsrc, link, shortdes){
    let prop = {};
    prop.title = title;
    prop.imgsrc = imgsrc;
    prop.link = link;
    prop.shortdes = shortdes;
    return prop;
  }
// export default getDataRecords;
  export{
    getDataRecords
  }