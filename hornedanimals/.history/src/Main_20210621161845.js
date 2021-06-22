import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
    render() {
        let HornedBeastList = [
            {
                image_url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
                title: 'UniWhal',
                description: "A unicorn and a narwhal nuzzling their horns",
                keyword: "narwhal",
                horns: 1
            },
            {
                image_url: "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
                title: 'Rhino Family',
                description: "Mother (or father) rhino with two babies",
                keyword: "rhino",
                horns: 2
            },
            {
                image_url: "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
                title: 'Unicorn Head',
                description: "Someone wearing a creepy unicorn head mask",
                keyword: "unicorn",
                horns: 1
            },
            {
                image_url: "https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80",
                title: "UniLego",
                description: "Lego figurine dressed in a unicorn outfit",
                keyword: "unilego",
                horns: 1
            },
            {
                image_url: "https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg",
                title: "Basically a unicorn",
                description: "A narwhal is basically a unicorn after all, right?",
                keyword: "narwhal",
                horns: 1
            },
            {
                image_url: "https://i.pinimg.com/originals/16/cf/2a/16cf2a0b3fd51b9bee08bb6296193b75.jpg",
                title: "#truth",
                description: "The truth behind narwhals",
                keyword: "narwhal",
                horns: 1
            },
            {
                image_url: "https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg",
                title: "Baby Rhino",
                description: "This is actually a figurine but it looks kinda real",
                keyword: "rhino",
                horns: 2
            },
            {
                image_url: "https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003",
                title: "Cera",
                description: "Three horns but still, horns. And who doesn't like The Land Before Time?",
                keyword: "triceratops",
                horns: 3
            },
            {
                image_url: "https://ae01.alicdn.com/kf/HTB18GwSQVXXXXaZaXXXq6xXFXXXh/Animal-Cosplay-Costume-Narwhal-Onesie-Mens-Womens-Cartoon-Whale-Pajamas.jpg",
                title: "Narwhal costume",
                description: "A woman wearing a blue narwhal costume",
                keyword: "narwhal",
                horns: 1
            },
            {
                image_url: "https://www.shopmascot.com/image/cache/mascotnew/new196-800x800.jpg",
                title: "Rhino costume",
                description: "Mascots have to get their costumes somewhere",
                keyword: "rhino",
                horns: 2
            },
            {
                image_url: "https://www.tinselbox.com/wp-content/uploads/2018/03/I-BELIEVE-IN-UNICORNS-FREE-PRINTABLE-WATERCOLOR-7-of-1.jpg",
                title: "Believe",
                description: "I believe in unicorns, do you?",
                keyword: "unicorn",
                horns: 1
            },
            {
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/220px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg",
                title: "Markhor",
                description: "These wild goats eat snakes, then secrete a foam that locals fight over for the antivemon properties -- how cool is that?",
                keyword: "markhor",
                horns: 2
            },
            {
                image_url: "http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi",
                title: "Baby markhor",
                description: "Even the babies are adorable",
                keyword: "markhor",
                horns: 2
            },
            {
                image_url: "https://images.unsplash.com/photo-1558560063-931ca9822a0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
                title: "Mouflon",
                description: "Those horns though",
                keyword: "mouflon",
                horns: 2
            },
            {
                image_url: "https://images.unsplash.com/photo-1556890077-020ec300d5db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
                title: "Addax",
                description: "This guy is basically extinct but survives well in captivity, so they're frequently found in zoos",
                keyword: "addax",
                horns: 2
            },
            {
                image_url: "https://cbsnews3.cbsistatic.com/hub/i/r/2013/03/05/5b414225-a645-11e2-a3f0-029118418759/thumbnail/620x350/2d4cf24685b45c22912e64d2004fec8d/Baby_Mouflon_Wild_Sheep.jpg",
                title: "Baby mouflon",
                description: "The cuteness that is a baby mouflon asleep",
                keyword: "mouflon",
                horns: 2
            },
            {
                image_url: "https://images.unsplash.com/photo-1514036783265-fba9577fc473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                title: "Happy Jackson's Chameleon",
                description: "These are really common in Hawaii",
                keyword: "chameleon",
                horns: 2
            },
            {
                image_url: "https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg",
                title: "Serious Jackson's Chameleon",
                description: "This one is very serious.",
                keyword: "chameleon",
                horns: 3
            },
            {
                image_url: "https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false",
                title: "Horned Lizard",
                description: "Fave food: ants",
                keyword: "lizard",
                horns: 100
            },
            {
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg",
                title: "Smaug",
                description: "Fan illustration of Smaug from 'The Hobbit'",
                keyword: "dragon",
                horns: 100
            }
        ];

        // let titleArray = [];
        // let titles = HornedBeastList.map((titels) =>{
        // titleArray.push(titels.title);
        // console.log(titleArray);
        // });

        // let imageArray = [];
        // let images = HornedBeastList.map((image) =>{
        // titleArray.push(image.image_url);
        // console.log(imageArray);
        // });

        // let desArray = [];
        // let descreption = HornedBeastList.map((des) =>{
        // titleArray.push(des.description);
        // console.log(desArray);
        // });

        let likes = [
            {like: 'https://image.similarpng.com/very-thumbnail/2020/06/Thumb-up-icon-like-transparent-PNG.png',
        }];
        // likeButton
        return (
            <div>
                <HornedBeasts title={HornedBeastList[0].title} image_url={HornedBeastList[0].image_url} description={HornedBeastList[0].description} likes={likes[0]}/>
                <HornedBeasts title={HornedBeastList[1].title} image_url={HornedBeastList[1].image_url} description={HornedBeastList[1].description} />
                <HornedBeasts title={HornedBeastList[2].title} image_url={HornedBeastList[2].image_url} description={HornedBeastList[2].description} />
                <HornedBeasts title={HornedBeastList[3].title} image_url={HornedBeastList[3].image_url} description={HornedBeastList[3].description} />
                <HornedBeasts title={HornedBeastList[4].title} image_url={HornedBeastList[4].image_url} description={HornedBeastList[4].description} />
                <HornedBeasts title={HornedBeastList[5].title} image_url={HornedBeastList[5].image_url} description={HornedBeastList[5].description} />
                <HornedBeasts title={HornedBeastList[6].title} image_url={HornedBeastList[6].image_url} description={HornedBeastList[6].description} />
                <HornedBeasts title={HornedBeastList[7].title} image_url={HornedBeastList[7].image_url} description={HornedBeastList[7].description} />
                <HornedBeasts title={HornedBeastList[8].title} image_url={HornedBeastList[8].image_url} description={HornedBeastList[8].description} />
                <HornedBeasts title={HornedBeastList[9].title} image_url={HornedBeastList[9].image_url} description={HornedBeastList[9].description} />
                <HornedBeasts title={HornedBeastList[10].title} image_url={HornedBeastList[10].image_url} description={HornedBeastList[10].description} />
                

                <HornedBeasts title={HornedBeastList[11].title} image_url={HornedBeastList[11].image_url} description={HornedBeastList[11].description} />
                <HornedBeasts title={HornedBeastList[12].title} image_url={HornedBeastList[12].image_url} description={HornedBeastList[12].description} />
                <HornedBeasts title={HornedBeastList[13].title} image_url={HornedBeastList[13].image_url} description={HornedBeastList[13].description} />
                <HornedBeasts title={HornedBeastList[14].title} image_url={HornedBeastList[14].image_url} description={HornedBeastList[14].description} />
                <HornedBeasts title={HornedBeastList[15].title} image_url={HornedBeastList[15].image_url} description={HornedBeastList[15].description} />
                <HornedBeasts title={HornedBeastList[16].title} image_url={HornedBeastList[16].image_url} description={HornedBeastList[16].description} />
                <HornedBeasts title={HornedBeastList[17].title} image_url={HornedBeastList[17].image_url} description={HornedBeastList[17].description} />
                <HornedBeasts title={HornedBeastList[18].title} image_url={HornedBeastList[18].image_url} description={HornedBeastList[18].description} />
                <HornedBeasts title={HornedBeastList[19].title} image_url={HornedBeastList[19].image_url} description={HornedBeastList[19].description} />

                {/* <HornedBeasts titles={titleArray} images={imageArray} description={desArray}/> */}
            </div>
        );
    }
}

export default Main;