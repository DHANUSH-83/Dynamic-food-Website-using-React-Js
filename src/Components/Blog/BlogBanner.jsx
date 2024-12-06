import React from 'react'
import './Pages.scss'
import Bannerimg from '../../asserts/Blog-Banners.jpg'
import { Data2 } from '../Home/Data'

function BlogBanner() {
    return (

        <div>
            <div className='BlogBanner'>
                <div className='BlogBanner-Contents'>
                    <img src={Bannerimg} alt="" />
                    <h1>What are the right ingredients to make it delicious?</h1>
                    <p>Making a delicious salad is an art of balancing flavors, textures, and freshness. Start with a base of crisp, fresh greens. Options like romaine, spinach, arugula, or kale provide a flavorful foundation. Be sure to wash and dry them thoroughly to maintain their crunch.

                        Add a variety of colorful vegetables to enhance both the nutritional value and the appeal. Cherry tomatoes, cucumbers, bell peppers, shredded carrots, and red onions are great choices. Roasted vegetables like sweet potatoes or beets add a warm, caramelized note.

                        Include a protein to make the salad more filling. Grilled chicken, tofu, hard-boiled eggs, or chickpeas can transform your salad into a satisfying meal. For plant-based options, try quinoa or lentils, which are both hearty and nutritious.

                        For texture, sprinkle crunchy elements like toasted nuts, seeds, or croutons. Pair this with creamy additions such as avocado, crumbled cheese, or hummus to balance the textures. Don’t forget fruit—sliced apples, orange segments, or pomegranate seeds add a sweet, refreshing twist.

                        A good dressing ties it all together. Make a simple vinaigrette with olive oil, vinegar, mustard, and honey, or try a creamy yogurt-based dressing. Drizzle lightly, toss evenly, and season with salt, pepper, or fresh herbs.

                        The perfect salad combines fresh ingredients, vibrant flavors, and a balance of textures, creating a dish that’s as satisfying as it is nutritious. Enjoy experimenting to make it uniquely yours!</p>
                </div>
            </div>

        </div>
    )
}

export default BlogBanner