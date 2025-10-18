// Articles Data
const articlesData = [
    {
        id: 1,
        title: "10 Must-Have Summer Dresses for Every Occasion",
        category: "fashion",
        categoryName: "Fashion & Accessories",
        date: "January 15, 2025",
        excerpt: "Discover the perfect summer dresses that will keep you stylish and comfortable throughout the season. From casual beach outings to elegant evening events, we've curated the ultimate collection.",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80",
        author: "Emma Thompson",
        content: `
            <p>Summer is the perfect time to refresh your wardrobe with light, breezy dresses that make you feel confident and comfortable. Whether you're planning a beach vacation, attending outdoor weddings, or simply enjoying casual weekends, having the right dress collection is essential.</p>
            
            <h3>1. The Classic White Sundress</h3>
            <p>Nothing says summer like a crisp white sundress. This timeless piece is incredibly versatile and can be dressed up or down. Look for breathable fabrics like cotton or linen that will keep you cool in the heat.</p>
            <img src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1200&q=80" alt="White sundress" class="article-detail-image">
            
            <h3>2. Floral Midi Dress</h3>
            <p>Floral patterns are synonymous with summer. A midi-length floral dress offers the perfect balance between casual and elegant. Pair it with sandals for daytime or dress it up with heels for evening events.</p>
            <img src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=1200&q=80" alt="Floral midi dress" class="article-detail-image">
            
            <h3>3. Maxi Dress for Beach Days</h3>
            <p>A flowing maxi dress is perfect for beach vacations. Choose one with a vibrant print or solid color that complements your skin tone. The length provides sun protection while keeping you cool.</p>
            
            <h3>Styling Tips</h3>
            <p>When accessorizing your summer dresses, keep it simple. Add a statement necklace or a delicate bracelet, comfortable sandals or espadrilles, and a stylish sun hat. Don't forget your sunglasses for that complete summer look!</p>
            
            <img src="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=1200&q=80" alt="Summer dress styling" class="article-detail-image">
            
            <h3>Care and Maintenance</h3>
            <p>To keep your summer dresses looking fresh, always check the care label. Most cotton and linen dresses can be machine washed, but delicate fabrics may require hand washing. Store them properly to avoid wrinkles and fading.</p>
        `,
        products: [
            {
                name: "Boho White Cotton Sundress",
                description: "Lightweight cotton sundress with adjustable straps and a flattering A-line silhouette. Perfect for beach days and casual summer outings.",
                price: "$49.99",
                image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
                rating: 4.8,
                link: "#"
            },
            {
                name: "Floral Print Midi Dress",
                description: "Beautiful floral midi dress with a cinched waist and flowing skirt. Features a romantic print that's perfect for garden parties.",
                price: "$69.99",
                image: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=800&q=80",
                rating: 4.9,
                link: "#"
            },
            {
                name: "Elegant Maxi Beach Dress",
                description: "Flowy maxi dress in breathable fabric with a bohemian-inspired design. Ideal for beach vacations and summer evenings.",
                price: "$79.99",
                image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80",
                rating: 4.7,
                link: "#"
            }
        ]
    },
    {
        id: 2,
        title: "Natural Skincare Routine: Morning to Night Guide",
        category: "health",
        categoryName: "Health & Beauty",
        date: "March 22, 2025",
        excerpt: "Transform your skin with our comprehensive natural skincare routine. Learn about the best organic products and techniques for a glowing, healthy complexion.",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=80",
        author: "Sophie Chen",
        content: `
            <p>In today's world of complex beauty products, sometimes the best approach is returning to natural skincare. A well-structured routine using organic ingredients can work wonders for your skin while avoiding harsh chemicals.</p>
            
            <h3>Morning Routine: Wake Up Your Skin</h3>
            <p>Starting your day with a proper skincare routine sets the tone for healthy, radiant skin. The morning is all about protection and preparation for the day ahead.</p>
            <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80" alt="Morning skincare" class="article-detail-image">
            
            <h4>Step 1: Gentle Cleanser</h4>
            <p>Begin with a gentle, natural cleanser to remove any oils that accumulated overnight. Look for products with ingredients like aloe vera, chamomile, or green tea extract.</p>
            
            <h4>Step 2: Toner and Essence</h4>
            <p>Apply a hydrating toner to balance your skin's pH. Rose water or witch hazel are excellent natural options that refresh and prepare your skin for moisturizer.</p>
            
            <h4>Step 3: Vitamin C Serum</h4>
            <p>A natural vitamin C serum brightens your complexion and provides antioxidant protection. This step is crucial for defending against environmental stressors.</p>
            
            <img src="https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=1200&q=80" alt="Natural skincare products" class="article-detail-image">
            
            <h3>Evening Routine: Repair and Restore</h3>
            <p>Your nighttime routine focuses on deep cleansing and repair. This is when your skin naturally regenerates, so supporting that process is essential.</p>
            
            <h4>Double Cleansing</h4>
            <p>Start with an oil-based cleanser to remove makeup and sunscreen, followed by a water-based cleanser. This ensures all impurities are removed without stripping your skin.</p>
            
            <h4>Night Cream or Oil</h4>
            <p>Apply a rich, nourishing night cream or facial oil. Ingredients like rosehip oil, argan oil, or jojoba oil provide deep hydration and support skin regeneration.</p>
            
            <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80" alt="Night skincare routine" class="article-detail-image">
            
            <h3>Weekly Treatments</h3>
            <p>Incorporate weekly treatments like natural face masks, gentle exfoliation with sugar or oatmeal scrubs, and facial massage for improved circulation. These extra steps enhance your regular routine and provide a spa-like experience at home.</p>
        `,
        products: [
            {
                name: "Organic Gentle Face Cleanser",
                description: "Natural cleanser with aloe vera and chamomile extract. Gently removes impurities while maintaining skin's natural moisture barrier.",
                price: "$24.99",
                image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
                rating: 4.9,
                link: "#"
            },
            {
                name: "Vitamin C Brightening Serum",
                description: "Potent natural vitamin C serum with hyaluronic acid. Brightens complexion and provides powerful antioxidant protection.",
                price: "$39.99",
                image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800&q=80",
                rating: 4.8,
                link: "#"
            },
            {
                name: "Nourishing Night Cream",
                description: "Rich overnight cream with rosehip oil and shea butter. Deeply hydrates and supports skin regeneration while you sleep.",
                price: "$34.99",
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
                rating: 4.7,
                link: "#"
            }
        ]
    },
    {
        id: 3,
        title: "Creating a Cozy Reading Nook: Design Ideas and Tips",
        category: "home",
        categoryName: "Home & Garden",
        date: "May 10, 2025",
        excerpt: "Transform any corner of your home into a peaceful reading sanctuary. Explore design ideas, furniture recommendations, and lighting tips for the perfect reading nook.",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80",
        author: "Michael Roberts",
        content: `
            <p>In our busy lives, having a dedicated space for reading and relaxation is more important than ever. A well-designed reading nook provides a personal sanctuary where you can escape into your favorite books and unwind from daily stress.</p>
            
            <h3>Choosing the Perfect Location</h3>
            <p>The first step in creating your reading nook is finding the right spot. Look for areas with natural light, away from high-traffic zones in your home. A corner near a window is ideal, offering both natural illumination and a connection to the outdoors.</p>
            <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80" alt="Reading nook by window" class="article-detail-image">
            
            <h3>Comfortable Seating is Essential</h3>
            <p>Your reading chair or seating arrangement is the foundation of your nook. Consider these options:</p>
            <ul>
                <li><strong>Oversized armchair:</strong> A plush, deep-seated chair with good back support</li>
                <li><strong>Window seat with cushions:</strong> Built-in seating that maximizes space</li>
                <li><strong>Bean bag or floor cushions:</strong> Casual and adaptable seating</li>
                <li><strong>Chaise lounge:</strong> Perfect for stretching out with a good book</li>
            </ul>
            
            <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80" alt="Cozy armchair" class="article-detail-image">
            
            <h3>Lighting Layers</h3>
            <p>Proper lighting is crucial for comfortable reading. Combine different light sources:</p>
            <p>Natural light during the day is best, but supplement with a reading lamp for evenings. Choose warm-toned LED bulbs that are easy on the eyes. A floor lamp with an adjustable arm or a table lamp positioned correctly will eliminate shadows and reduce eye strain.</p>
            
            <h3>Personal Touches and Accessories</h3>
            <p>Make your reading nook truly yours with personal touches. Add soft throw blankets in your favorite colors, decorative pillows for extra comfort, and a small side table for your tea or coffee. Consider adding a small bookshelf or magazine rack within arm's reach.</p>
            
            <img src="https://images.unsplash.com/photo-1522444195799-478538b28823?w=1200&q=80" alt="Reading nook accessories" class="article-detail-image">
            
            <h3>Creating Ambiance</h3>
            <p>The atmosphere of your reading nook should promote relaxation. Consider adding plants for a touch of nature, scented candles for aromatherapy, soft background music or white noise, and artwork that inspires calm and creativity. These elements work together to create a space that invites you to sit down and get lost in a good book.</p>
        `,
        products: [
            {
                name: "Luxury Reading Armchair",
                description: "Ergonomically designed armchair with plush cushioning and lumbar support. Features soft velvet upholstery and elegant wooden legs.",
                price: "$399.99",
                image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
                rating: 4.9,
                link: "#"
            },
            {
                name: "Adjustable Reading Floor Lamp",
                description: "Modern floor lamp with adjustable arm and brightness settings. Provides perfect lighting for extended reading sessions.",
                price: "$89.99",
                image: "https://images.unsplash.com/photo-1522444195799-478538b28823?w=800&q=80",
                rating: 4.7,
                link: "#"
            },
            {
                name: "Cozy Throw Blanket Set",
                description: "Ultra-soft chenille blankets in calming colors. Perfect size for curling up with a book. Set of 2.",
                price: "$45.99",
                image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80",
                rating: 4.8,
                link: "#"
            }
        ]
    },
    {
        id: 4,
        title: "Hidden Gems: 5 Underrated European Destinations",
        category: "travel",
        categoryName: "Travel & Accommodation",
        date: "June 28, 2025",
        excerpt: "Skip the tourist crowds and discover Europe's best-kept secrets. From charming medieval towns to stunning coastal villages, these destinations offer authentic experiences.",
        image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1200&q=80",
        author: "Alex Martinez",
        content: `
            <p>While Paris, Rome, and Barcelona are undeniably beautiful, Europe is filled with lesser-known destinations that offer equally stunning experiences without the overwhelming tourist crowds. These hidden gems provide authentic local culture, breathtaking scenery, and unforgettable memories.</p>
            
            <h3>1. Bled, Slovenia</h3>
            <p>Nestled in the Julian Alps, Lake Bled is a fairy-tale destination that feels like stepping into a storybook. The emerald-green lake with its picturesque island church and medieval castle perched on a cliff creates a scene of unparalleled beauty.</p>
            <img src="https://images.unsplash.com/photo-1505832018823-50331d70d237?w=1200&q=80" alt="Lake Bled Slovenia" class="article-detail-image">
            
            <p><strong>What to do:</strong> Take a traditional pletna boat to Bled Island, hike up to Bled Castle for panoramic views, try the famous Bled cream cake (kremšnita), and explore nearby Vintgar Gorge.</p>
            
            <h3>2. Porto, Portugal</h3>
            <p>Portugal's second city is a colorful riverside destination famous for its Port wine, historic architecture, and vibrant street art. The UNESCO-listed Ribeira district, with its rainbow-colored houses, is endlessly photogenic.</p>
            <img src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80" alt="Porto Portugal" class="article-detail-image">
            
            <p><strong>What to do:</strong> Tour the Port wine cellars in Vila Nova de Gaia, walk across the iconic Dom Luís I Bridge, explore the stunning Livraria Lello bookstore, and watch the sunset from one of the riverside cafés.</p>
            
            <h3>3. Ghent, Belgium</h3>
            <p>Often overshadowed by Brussels and Bruges, Ghent is a medieval gem with stunning architecture, charming canals, and a vibrant arts scene. It's the perfect size for exploring on foot.</p>
            
            <h3>4. Kotor, Montenegro</h3>
            <p>This fortified town on the Bay of Kotor offers dramatic mountain scenery meeting the Adriatic Sea. The well-preserved old town is a maze of narrow streets, historic churches, and cozy squares.</p>
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80" alt="Kotor Montenegro" class="article-detail-image">
            
            <h3>5. Reine, Norway</h3>
            <p>Located in the Lofoten Islands, Reine is consistently rated as one of the most beautiful villages in Norway. Dramatic mountains rise directly from the sea, creating a landscape that feels otherworldly.</p>
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80" alt="Reine Norway" class="article-detail-image">
            
            <h3>Travel Tips</h3>
            <p>When visiting these destinations, consider traveling in shoulder seasons (April-May or September-October) for better weather and fewer crowds. Book accommodations in advance, especially in smaller towns, learn a few phrases in the local language, and always respect local customs and environment. These hidden gems offer incredible value compared to major tourist hotspots while providing authentic cultural experiences.</p>
        `,
        products: [
            {
                name: "Lonely Planet Slovenia Travel Guide",
                description: "Comprehensive travel guide covering Slovenia's best destinations, including detailed maps and local insights.",
                price: "$24.99",
                image: "https://images.unsplash.com/photo-1505832018823-50331d70d237?w=800&q=80",
                rating: 4.8,
                link: "#"
            },
            {
                name: "Travel Backpack 40L",
                description: "Durable and comfortable travel backpack with laptop compartment and multiple pockets. Perfect for European adventures.",
                price: "$79.99",
                image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
                rating: 4.9,
                link: "#"
            },
            {
                name: "Universal Travel Adapter",
                description: "All-in-one travel adapter with USB ports. Compatible with outlets in over 150 countries.",
                price: "$29.99",
                image: "https://images.unsplash.com/photo-1591290619762-d41f5d76a19f?w=800&q=80",
                rating: 4.7,
                link: "#"
            }
        ]
    },
    {
        id: 5,
        title: "Smart Budgeting Tips for Young Professionals",
        category: "finance",
        categoryName: "Finance & Insurance",
        date: "August 5, 2025",
        excerpt: "Master your finances with practical budgeting strategies designed for young professionals. Learn how to save, invest, and achieve your financial goals.",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80",
        author: "Jennifer Lee",
        content: `
            <p>Starting your career is exciting, but managing finances as a young professional can be challenging. Between student loans, rent, and trying to save for the future, it's easy to feel overwhelmed. The good news is that with smart budgeting strategies, you can take control of your finances and work toward your goals.</p>
            
            <h3>Understanding the 50/30/20 Rule</h3>
            <p>This simple budgeting framework is perfect for beginners. Allocate 50% of your after-tax income to needs (rent, utilities, groceries, insurance), 30% to wants (dining out, entertainment, hobbies), and 20% to savings and debt repayment.</p>
            <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80" alt="Budget planning" class="article-detail-image">
            
            <h3>Track Every Expense</h3>
            <p>You can't manage what you don't measure. For one month, track every single expense to understand your spending patterns. Use budgeting apps like Mint, YNAB (You Need A Budget), or even a simple spreadsheet. This awareness is often eye-opening and helps identify areas where you can cut back.</p>
            
            <h3>Build an Emergency Fund</h3>
            <p>Financial experts recommend having 3-6 months of expenses saved in an easily accessible account. Start small if needed—even $500 can help you avoid going into debt for unexpected expenses.</p>
            <img src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=1200&q=80" alt="Savings jar" class="article-detail-image">
            
            <p><strong>Emergency Fund Tips:</strong></p>
            <ul>
                <li>Automate transfers to your savings account each payday</li>
                <li>Keep the money in a high-yield savings account</li>
                <li>Don't touch it unless it's a true emergency</li>
            </ul>
            
            <h3>Tackle Debt Strategically</h3>
            <p>If you have student loans or credit card debt, create a payoff strategy. The two most popular methods are the debt avalanche (paying off highest interest rate first) and debt snowball (paying off smallest balance first for psychological wins).</p>
            
            <h3>Start Investing Early</h3>
            <p>Thanks to compound interest, even small investments in your 20s can grow substantially. Take advantage of employer 401(k) matches—it's free money. Consider opening a Roth IRA for tax-free growth on your retirement savings.</p>
            <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1200&q=80" alt="Investment growth" class="article-detail-image">
            
            <h3>Reduce Fixed Expenses</h3>
            <p>Look for ways to lower your regular bills: negotiate your internet and phone plans, consider a roommate to split rent, cook at home more often, and use public transportation when possible. Small reductions in fixed expenses free up money for savings and investments.</p>
            
            <h3>Set SMART Financial Goals</h3>
            <p>Make your goals Specific, Measurable, Achievable, Relevant, and Time-bound. Instead of "save more money," try "save $5,000 for a house down payment by December 2026." Clear goals keep you motivated and provide direction for your budget.</p>
        `,
        products: [
            {
                name: "Financial Planner Journal",
                description: "12-month budget planner with expense trackers, goal setting pages, and monthly reviews. Helps organize your finances effectively.",
                price: "$19.99",
                image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
                rating: 4.8,
                link: "#"
            },
            {
                name: "Budget Envelopes System",
                description: "Cash envelope budgeting system with 12 labeled categories. Classic method for controlling spending.",
                price: "$12.99",
                image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&q=80",
                rating: 4.6,
                link: "#"
            }
        ]
    }
];

