import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

function Scraper({ websiteLink }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(websiteLink);
                const $ = cheerio.load(response.data);
                
                // Now you can use jQuery-like syntax to select elements and extract data
                const title = $('title').text();
                const paragraphs = $('p').map((i, el) => $(el).text()).get();

                // Log the scraped data to the console
                console.log("Title:", title);
                console.log("Paragraphs:", paragraphs);

                setData({ title, paragraphs });
            } catch (error) {
                console.error('Error scraping website:', error);
            }
        }
        fetchData();
    }, [websiteLink]);

    return (
        <div>
            {data ? (
                <div>
                    <h1>{data.title}</h1>
                    <ul>
                        {data.paragraphs.map((paragraph, index) => (
                            <li key={index}>{paragraph}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Scraper;
