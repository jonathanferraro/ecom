import React, { useEffect, useState } from 'react';
import './ProductsLoading.css'
import { useSelector } from 'react-redux';
import { selectProductsStatus } from '../../store/products/Products.reducers';

export function ProductsLoading() {
    const animalFacts = [
        "The blue whale is the largest animal ever known to have existed, reaching lengths of up to 98 feet (30 meters) and weighing as much as 200 tons.",
        "Cows have best friends and develop strong social bonds with them.",
        "The tongue of a blue whale is so large that up to 50 people could stand on it.",
        "Some birds, such as pigeons and swans, can recognize themselves in mirrors, which is a sign of self-awareness.",
        "Elephants are known for their exceptional memory and can remember specific locations and other elephants for many years.",
        "The mimic octopus can change its shape, color, and behavior to mimic other sea creatures, such as snakes, lionfish, and jellyfish.",
        "The cheetah is the fastest land animal, capable of reaching speeds up to 70 miles per hour (113 kilometers per hour) in short bursts.",
        "The arctic tern holds the record for the longest migration of any animal, traveling around 44,000 miles (70,800 kilometers) from its breeding grounds in the Arctic to its wintering grounds in the Antarctic and back.",
        "Honeybees communicate with each other through a complex dance language called the 'waggle dance,' which conveys information about the location of food sources.",
        "The axolotl, a unique salamander species, has the ability to regenerate entire limbs, spinal cord, heart, and other organs."
      ];
    const [animalFact, setAnimalFact] = useState('');
    const productsStatus = useSelector(selectProductsStatus);

    const factPicker = () => {
        const animalFactsCopy = [...animalFacts];
            let index = Math.floor(Math.random() * (animalFactsCopy.length));
            setAnimalFact(animalFactsCopy.splice(index, 1)[0]);
        const intervalId = setInterval(() => {
          if (animalFactsCopy.length > 0 ) {
            let index = Math.floor(Math.random() * (animalFactsCopy.length));
            setAnimalFact(animalFactsCopy.splice(index, 1)[0]);
          } else {
            clearInterval(intervalId);
            return;
          }
        }, 8000);
      };

    useEffect(() => {
        factPicker();
    }, []);


    return (
        <div className='products-loading'>
            <h1>Searching for products...</h1>
            {/* <img src='http://static.demilked.com/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-14.gif' /> */}
            <img src='https://lh3.googleusercontent.com/fQhhFCpiVwXy32OVIbEz7TCef-n3r759eMKE-PIvSH3AVieetlJk48Pka-lOBDtag3qFn1_ZuTW927sUOoTiZo1Ai1cD-_VBU78yRimrEak93xKORA=w1064-v0'/>
            <br/>
            <div className='animal-facts'>
                <p className='animal-fact-header'>Animal Fact:</p>
                <p className='animal-fact-content'>{animalFact}</p>
            </div>
        </div>
    )
}