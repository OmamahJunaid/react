const Review =()=>{
  return <>
  <div>
    <div className="reviews">
    <h2>What people are saying....</h2>
    <div className="users">
        <div><img width={200} style={{borderRadius:"600px"}} src="src\assets\img\testimonials-1.jpg" alt="" /> <h4>Marget E</h4> <p>Lorem ipsum dolor sit amet.</p></div>
        <div><img width={200} style={{borderRadius:"600px"}}  src="src\assets\img\testimonials-2.jpg" alt="" /> <h4>Fred S</h4> <p>Lorem ipsum dolor sit amet consectetur. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi?</p></div>
        <div><img width={200} style={{borderRadius:"600px"}}  src="src\assets\img\testimonials-3.jpg" alt="" /> <h4>Sarah W.</h4><p>Lorem ipsum dolor sit amet.</p></div>
    </div>
    </div>
  </div>
  </>  
}
export default Review