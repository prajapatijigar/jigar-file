import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

const HoneyCombChild = forwardRef((props, ref) => {
  const [state, setstate] = useState(0)
  const [ele, setele] = useState(0)
  const [ele2, setele2] = useState(0)


 
  useImperativeHandle(ref, () => ({
    getAlert() {
      console.log("called inside child from parent btn click");
      const shuffleInUse = shuffle(arr)
      
      setele(shuffleInUse[0])
      setele2(shuffleInUse[1])
      console.log();
    },
  }));

  useEffect(() => {
    const shuffleInUse = shuffle(arr)
    console.log("useeffect called");
    setele(shuffleInUse[0])
    setele2(shuffleInUse[1])
    shuffleInUse.shift()
    shuffleInUse.shift()
    props.onChange(shuffleInUse)

    console.log("shuffleInUse", shuffleInUse);
  }, [ele])




  const arr = [1, 2, 3, 4, 5, 6]

  const shuffle = (array) => {

    for (let i = array.length - 1; i > 0; i--) {
      //  console.log("i", i);
      const j = Math.floor(Math.random() * (i + 1))
      // console.log("j", j);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;

    }
    return array
  }
  // console.log("shuffle", shuffle(arr));
  const onchange = () => {
    setstate(shuffle(arr))
  }


  return (
    <>
      <p>heloo</p>
      <p>remaining element : {ele} , {ele2}</p>
      <button onClick={onchange}>shuffle</button>
      <p>element: {state}</p>

    </>
  );
});

export default HoneyCombChild;