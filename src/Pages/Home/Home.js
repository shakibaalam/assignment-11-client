import React from 'react';
import { Carousel } from 'react-bootstrap';
import InventorySection from '../Inventory/InventorySection/InventorySection';
import Categories from '../OtherSections/Categories/Categories';
import Part from '../OtherSections/Part/Part';
import Footer from '../Shared/Footer/Footer';
import './Home .css'

const Home = () => {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner"
                            src="https://bachatbazar.co/public/uploads/news-2.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p className='text-dark'> Now a days, grocery stores are available at everywhere.Buying the necessary things from a grocery store is called grocery shopping.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner"
                            src="https://t3.ftcdn.net/jpg/02/46/02/78/360_F_246027822_NwEoRdOEJZ9K62jkO0Stk39yDAt919hE.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <p className='text-dark'> All kinds of daily necessary things like milk, eggs, bread, oil, sugar, salt, cool-drinks etc are found in a grocery store. However, if we want to go for grocery shopping, we should do some little but important things.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner"
                            src="https://media.istockphoto.com/photos/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-picture-id1319625327?b=1&k=20&m=1319625327&s=170667a&w=0&h=FRRQT4yPOTumTJkCOmthHBcRvzoGvqw7drlSlYZhUNo="
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <p className='text-dark'>Our grocery store sells fresh produce, meats, dairy products and, often, bakery goods alongside canned, frozen and prepared foods.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <InventorySection></InventorySection>
            <Categories></Categories>
            <Part></Part>
            <Footer></Footer>

        </div>
    );
};

export default Home;