const scenes = [
    {
        annotations: [
            { note: { label: `Observe how each country's Dystopia + residual score can be different. While the Dystopia factor itself is a constant score of 1.58, 
            residual values for each country differ, and as mentioned by the WHR, the residual represents other factors not explained by the six key factors`, title: "Dystopia + residual" }, x: 525, y: 150, dy: 50, dx: 50, subject: { radius: 30, radiusPadding: 5 } },
        ],
        description: `On the left here we have a chart displaying the top 10 countries based on WHR's happiness score, using a method called the Cantril ladder, where respondents were asked to think of a ladder,
         with the best possible life for them being a 10, and worst possible a 10. Various sources were used to gather relevant data for each of the following 6 key factors, where regression analyses were then done
         to determine how much each factor explains a portion of the happiness score, on top of a benchmark score of Dystopia + residual.
        <br><br>
        More specifically, data for GDP per capita is from World Development Indicators (WDI), and healthy life expectancies are based on World Health Organization's (WHO) Global Health Observatory data repository. Social support is 
        based on answers to the Gallup World Poll (GWP) question "If you were in trouble, do you have relatives or friends you can count on to help you whenever you need them, or not?". Likewise, freedom to make life choices 
        is based on the GWP question "Are you satisfied or dissatisfied with your freedom to choose what you do with your life?" and for generosity "have you donated money to a charity in the past month?". And as for perception of 
        corruption, it is based on two GWP questions "Is corruption widespread throughout the government or not?" and "Is corruption widespread within businesses or not?".
        <br><br>
        Dystopia as explained by WHR "is an imaginary country that has the world's least-happy people.", where its score is based on the world's lowest national averages for each of the six factors. Residuals are unexplained 
        components reflecting over- or under-explanations of the six factors for each country. Here we show Finland's (WHR happiness score rank 1) scores and breakdown for how much each factor contributes to the overall score 
        (data for each displayed country which you would later be able to explore on your own).
        For more detailed information, check out WHR's <a href="https://worldhappiness.report/faq/">FAQ page</a> and the <a href="https://worldhappiness.report/ed/2024/#appendices-and-data">Statistical Appendix 1</a> writeup.
        Now, click on "Next >>" to dive a little deeper into these factors.`,
        barChartFilter: data => data.slice(0, 10),
        scatterplotFilter: data => data,
        disableTooltips: true,
        fixedTooltipCountry: "Finland",
        fixedTooltipPosX: '125px',
        fixedTooltipPosY: `500px`,
        scatterAnnotations: false,
        stackedAnnotations: true
    },
    {
        annotations: [
            { note: { label: `Note how GDP per capita and Social Support are consistently the top 2 contributing factors to each country's happiness score`, title: "Top 2 factors" }, x: 120, y: 400, dy: 50, dx: 50, subject: { radius: 30, radiusPadding: 5 } },
            { note: { label: `Observe how while each of the remaining 4 sub-bar sizes look fairly similar across countries, Perceptions of Corruption and Generosity seem to differ for various countries.
            Interestingly, the remaining 4 factors' sub-bars seem to add up to roughly similar sizes to each of the top 2 factors with certain exceptions`, title: "Remaining 4 factors" }, x: 485, y: 300, dy: 50, dx: 50, subject: { radius: 30, radiusPadding: 5 } }
        ],
        description: `Now that we have a decent understanding of what each factor represents, let us make more observations. Here we refreshed the same dataset in our stacked bar chart, this time showing countries whose happiness
        scores are higher than 6.5. We looked a little deeper into how each factor seems to contribute to a country's happiness score, observing a few patterns. 
        <br><br>
        As shown previously, we also pointed out how different countries' Dystopia + Residual scores may differ. In particular, one could actually observe that for ranks 1 and 2 i.e. Finland and Denmark, while Finland has a 
        higher overall happiness score, Denmark's total score from just the 6 key factors exceed that of Finland's, where we thus note that Finland's score stemming from residual (unexplained factors) is higher than Denmark's. 
        A similar pattern where certain countries have higher residual scores but lower scores from the 6 key factors than other slightly lower ranking countries could be found. 
        <br><br>
        While we made a minor observation in terms of how residuals may fluctuate and contribute to each country's overall happiness score, we pointed this out to note how unexplained factors to each country's happiness (Cantril ladder) score 
        indeed exist, at least according to WHR's methodology. This list of 6 key factors and a Dystopia benchmark are therefore not necessarily exhaustive, although they explain most of the happiness score data seen.`,
        barChartFilter: data => data.filter(d => d.ladderScore > 6.5),
        scatterplotFilter: data => data,
        disableTooltips: true,
        scatterAnnotations: false,
        stackedAnnotations: true
    },
    {
        scatterplotAnnotations: [
            { note: { label: `While Singapore's happiness score still sits fairly high at 6.523 (WHR rank 30), despite being rank 9 in HDI, its happiness score pales in comparison to the top 10.
            Hong Kong on the other hand, fares worse at a happiness score of 5.316 (WHR rank 86), and starkly so despite being rank 4 in HDI at 0.956`, title: "High HDI, but not so happy" }, x: 665, y: 270, dy: 50, dx: -50, subject: { radius: 30, radiusPadding: 5 } },
        ],
        description: `Besides WHR's happiness score and its contributing factors, we also obtained data from the human development index (HDI), where the HDI consists of 
        <a href="https://hdr.undp.org/data-center/human-development-index#/indicies/HDI">3 key indicators</a> in life expectancy, education, and GNI per capita. While HDI doesn't necessarily measure happiness, it does
        measure <a href="https://en.wikipedia.org/wiki/Developmental_psychology">human development</a>, which psychologists have known is related to well-being 
        (here is <a href="https://hdr.undp.org/content/happiness-well-being-and-human-development">an example of a publication from the UN</a> in this area).
        <br><br>
        For our purposes, note how we could intuitively equate 2 factors from the HDI, life expectancy and GNI per capita to WHR's healthy life expectancy and GDP per capita, and spot differences in relative scores for 
        the remaining factors in each meta score/index i.e. HDI and WHR. These remaining factors specifically are education in HDI, and social support, freedom to make life choices, generosity, perceptions of corruption, and 
        dystopia + residual in WHR.
        <br><br>
        Here we first observe how certain places eg. Hong Kong and Singapore may have high HDI scores, but are apparently not so happy as societies when also looking at their global counterparts. It would appear that merely scoring 
        high on education may not necessarily offset the lack of the other aforementioned 4 factors in WHR (social support, freedom, generosity, corruption perception) and other unexplained factors (residual). 
        <br><br>
        Interestingly, on a closer look, Hong Kong's scores for the 6 key factors sum up to 4.984 (Finland is at 5.658 with Dystopia + residual at 2.082), while its Dystopia + residual score was actually determined to be at 0.333 
        (lower than the supposed Dystopia constant itself). While this warrants further analysis, and perhaps a deeper dive into how WHR may have determined or explained this, the happiness or Cantril ladder score, and data from 
        the other factors are nonetheless based on supposedly the same methods carried out for all countries. We could thus only assume there are other factors at play and there exists a different approach to dissecting and 
        understanding this. Note that although in the tooltip and original dataset Hong Kong is stated as a "country", it is actually not one (i.e. it is a city in China), but is likely split as such in the WHR's categorization as 
        being a former British colony, Hong Kong has long developed differently overall as a city and society from its Chinese counterparts.
        <br><br>
        We further observe that there indeed appears to be an overall pattern where countries with higher HDI values also have higher happiness scores (notice how the data points in the scatter plot tend towards a line with an upward
        slope from bottom left to top right, assuming we were to attempt to fit a linear regression line here.) The key insight however remains that despite certain places having high HDI scores (which as a measurement for human 
        development, is related to well-being which encompasses happiness), they may not necessarily have higher happiness scores. Likewise, while some other countries may not score high on HDI (which could likely be defined here as 
        >=0.9), they nonetheless score fairly high on happiness / the Cantril ladder (likely defined here as >=6.5). An example is Mexico, with a HDI of 0.781, and happiness score of 6.678.`,
        barChartFilter: data => data.filter(d => d.ladderScore > 6.5),
        scatterplotFilter: data => data,
        disableTooltips: true,
        fixedTooltipCountry: "Hong Kong S.A.R. of China",
        fixedTooltipPosX: '1275px',
        fixedTooltipPosY: `375px`,
        scatterAnnotations: true,
        stackedAnnotations: false
    },
    {
        annotations: [
            { note: { label: `While Israel can be considered to be in West Asia, where most countries in this subregion tend to have relatively lower happiness scores as well as HDI values,
            Israel is the exception, and ranks 5th in the WHR, and 25th in HDI at a score of 0.915`, title: "Israel" }, x: 150, y: 150, dy: 50, dx: 50 },
            { note: { label: `If we broaden our filter criteria to the top 25 countries (Germany being 25th) in the WHR (again, out of 143 in the dataset), we would expect to include Northern America as a subregion 
            (which is just Canada and the United States) as well. Central America would also be included, with Costa Rica and Mexico (as previously mentioned) being the countries filtered for. Interestingly, these 2 countries 
            have relatively lower HDI values (0.806 at rank 64 and 0.781 at rank 77 respectively), as opposed to higher happiness scores`, title: "Northern and Central America" }, x: 525, y: 200, dy: 50, dx: 50 },
        ],
        scatterplotAnnotations: [
            { note: { label: `5/10 of Northern Europe countries (lowest WHR rank being Latvia at 46, score of 6.234) and 3/7 of Western Europe countries (lowest rank being France at 27, score of 6.609) are in the top 10, where these 
            2 subregions are geographically next to each other as well. This is in contrast to the bottom 10 in the WHR, which are in subregions South Asia, West Asia, Southern Africa, West Africa, Central Africa, and East Africa.
            In fact, the bottom 50 are all in these subregions, with the addition of 3 countries in Southeast Asia (Laos, Myanmar and Cambodia)`, title: "Northern and Western Europe" }, x: 630, y: 120, dy: 50, dx: -50 },
        ],
        description: `Another interesting trend we have observed upon further categorizing countries into subregions as defined by the <a href="https://en.wikipedia.org/wiki/United_Nations_geoscheme">UN Geoscheme</a> is
        that countries in the top 10 ranking of happiness scores, as one would intuitively expect, tend to belong to regions (or rather subregions as officially defined) that are considered more developed than others, and congregate
        within certain subregions. 
        <br><br>
        Here we highlight countries belonging to subregions where such subregions has at least 1 country in the top 10 ranking of the WHR, and notice a couple of patterns. Firstly, countries in the Northern and Central Europe subregions
        take up 8 spots out of the top 10 with the other 2 being Israel and Australia. We do have to note that New Zealand, being the other country in Oceania as defined in this list is just 1 mere spot away at rank 11 in the WHR.
        <br><br>
        Countries such as Canada and United States (also Northern America together) that are generally considered highly developed fall just slightly short at ranks 16 and 24, whereas the United Kingdom comes in also only at rank 21. While 
        being within the top 30 is no small achievement, compared to the happiness scores of the top 3 which are >7.5, countries outside of the top 11 have happiness scores that begin to drop lower than 7.0 starting from Costa Rica (rank 12)
        at 6.955. While it is difficult to compare and imagine what these numbers may actually mean, a difference of 0.5 to 1 out of 7.5 i.e. 7% to 13% relative difference, between the top 11 countries and ranks 12 through 31 (Taiwan) could be considered 
        rather significant. Hence having a happiness score of 7.0 or more would seem to then actually be considered high, if having a benchmark cutoff value makes for more meaningful analysis and insight.
        <br><br>
        Once again, not neglecting Australia and New Zealand in Oceania, it is clear that countries in subregions Northern Europe, Western Europe, and Oceania are better off in terms of happiness, and if these factors or indicators 
        are any approximation as well, well-being as a whole.
        `,
        barChartFilter: data => data.filter(d => d.ladderScore > 6.5),
        scatterplotFilter: data => data,
        disableTooltips: true,
        highlightSubregions: true,
        scatterAnnotations: true,
        stackedAnnotations: true
    },
    {
        description: `We have thus gone a short journey of briefly understanding what are some key factors that likely contribute to our happiness and by how much, based on the WHR's data, followed by making a few observations in terms 
        of patterns and what could be considered exceptions (maybe even slight outliers) when analyzed in conjunction with HDI data. Finally, we viewed this again from a broader perspective by looking at geographical subregions, and 
        realize there are indeed certain subregions (Northern Europe, Western Europe, and Oceania) whose happiness and HDI scores are generally 
        higher than those of others.
        <br><br>
        Feel free to explore the data in both charts to see if you could learn and find out more (hover your mouseover each stacked bar or data point to see more information about that country). You can click on the various filter 
        buttons to filter for countries to display in the stacked bar chart, and also select a subregion in the scatter plot legend (eg. try pressing on Northern Europe on the top right of the legend) to highlight countries in 
        that subregion for both charts. Also check out the <a href="https://worldhappiness.report/data/">WHR Dashboard</a> and the <a href="https://hdr.undp.org/data-center/human-development-index#/indicies/HDI">HDI Data Exploration</a> webpages for further insight.`,
        barChartFilter: data => data,
        scatterplotFilter: data => data,
        disableTooltips: false,
        highlightSubregions: false
    }
];

let tooltipsEnabled = true;
let currentScene = 0;
let currentBarChartData = [];
let currentScatterplotData = [];
let mainData = [];

function addAnnotations(svg, annotations) {
    svg.selectAll(".annotation-group").remove();

    const makeAnnotations = d3.annotation()
        .type(d3.annotationLabel)
        .annotations(annotations)
        .textWrap(250);

    const annotationGroup = svg.append("g")
        .attr("class", "annotation-group")
        .call(makeAnnotations);

    annotationGroup.selectAll(".annotation-note-label")
        .style("fill", "black")
        .style("font-size", "14px")
        .style("background-color", "white")
        .style("padding", "5px")
        .style("border-radius", "3px");

    annotationGroup.selectAll(".annotation-note-title")
        .style("fill", "#003366")
        .style("font-weight", "bold");

    annotationGroup.selectAll(".annotation-connector")
        .style("stroke", "#003366")
        .style("stroke-width", "2px");

    annotationGroup.selectAll(".annotation-subject")
        .style("stroke", "#003366")
        .style("stroke-width", "2px");

    annotationGroup.selectAll(".annotation-note")
        .each(function () {
            const note = d3.select(this);
            const bbox = note.node().getBBox();
            note.insert("rect", ":first-child")
                .attr("x", bbox.x - 10)
                .attr("y", bbox.y - 10)
                .attr("width", bbox.width)
                .attr("height", bbox.height)
                .attr("fill", "white")
                .attr("rx", 3)
                .attr("ry", 3)
                .style("stroke", "#003366")
                .style("stroke-width", "2px")
                .style("opacity", "0.7");
        });
}

async function loadData() {
    const data = await d3.csv('data.csv');
    return data;
}

function processSceneOneData(data) {
    data.forEach(d => {
        d.country = d['Country name'];
        d.subregion = d['Subregion (UN geoscheme)'];
        d.hdi = +d['HDI (2022)'];
        d.ladderScore = +d['Ladder score'];
        d.gdp = +d['Explained by: Log GDP per capita'];
        d.socialSupport = +d['Explained by: Social support'];
        d.lifeExpectancy = +d['Explained by: Healthy life expectancy'];
        d.freedom = +d['Explained by: Freedom to make life choices'];
        d.generosity = +d['Explained by: Generosity'];
        d.corruption = +d['Explained by: Perceptions of corruption'];
        d.dystopiaResidual = +d['Dystopia + residual'];
        d.combinedLadderScore = d.gdp + d.socialSupport + d.lifeExpectancy + d.freedom + d.generosity + d.corruption + d.dystopiaResidual;

        console.log("processed row:", d);
    });
    return data;
}

function scene1(data) {
    const width = 850;
    const height = 700;
    const margin = { top: 40, right: 150, bottom: 100, left: 60 };
    const c_width = width - margin.left - margin.right;
    const c_height = height - margin.top - margin.bottom;

    const keys = ["gdp", "socialSupport", "freedom", "lifeExpectancy", "generosity", "corruption", "dystopiaResidual"];
    const stackedData = d3.stack().keys(keys)(data);

    const variableNames = {
        gdp: "GDP per capita",
        socialSupport: "Social Support",
        freedom: "Freedom to make life choices",
        lifeExpectancy: "Healthy Life Expectancy",
        generosity: "Generosity",
        corruption: "Perceptions of Corruption",
        dystopiaResidual: "Dystopia + Residual"
    };

    const maxTextWidth = d3.max(Object.values(variableNames), d => d.length) * 6 + 24;

    const svg = d3.select('#chart')
        .html("")
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const x = d3.scaleBand()
        .domain(data.map(d => d.country))
        .range([0, c_width])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.combinedLadderScore)])
        .nice()
        .range([c_height, 0]);

    const color = d3.scaleOrdinal()
        .domain(["gdp", "socialSupport", "freedom", "lifeExpectancy", "generosity", "corruption", "dystopiaResidual"])
        .range(d3.schemeTableau10);

    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    g.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${c_height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end");

    g.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(y).ticks(10));

    const series = g.selectAll(".serie")
        .data(stackedData)
        .enter().append("g")
        .attr("class", "serie")
        .attr("fill", d => color(d.key));

    series.selectAll("rect")
        .data(d => d)
        .enter().append("rect")
        .attr("x", d => x(d.data.country))
        .attr("y", d => y(d[1]))
        .attr("height", d => y(d[0]) - y(d[1]))
        .attr("width", x.bandwidth());
    
    series.selectAll("rect")
        .on("mouseover", (event, d) => {
            if (tooltipsEnabled) {
                d3.select("#tooltip")
                    .style("left", `${event.pageX + 20}px`)
                    .style("top", `${event.pageY}px`)
                    .style("opacity", 1)
                    .style("display", "block")
                    .html(`
                        <strong>Country:</strong> ${d.data.country}<br>
                        <strong>Subregion:</strong> ${d.data.subregion}<br>
                        <strong>HDI:</strong> ${d.data.hdi}<br>
                        <strong>Happiness Score:</strong> ${d.data.ladderScore}<br>
                        <br>
                        <strong>--- Happiness Score Breakdown ---</strong><br>
                        <strong>GDP per capita:</strong> ${d.data.gdp}<br>
                        <strong>Social Support:</strong> ${d.data.socialSupport}<br>
                        <strong>Healthy Life Expectancy:</strong> ${d.data.lifeExpectancy}<br>
                        <strong>Freedom to make life choices:</strong> ${d.data.freedom}<br>
                        <strong>Generosity:</strong> ${d.data.generosity}<br>
                        <strong>Perception of Corruption:</strong> ${d.data.corruption}<br>
                        <strong>Dystopia + Residual:</strong> ${d.data.dystopiaResidual}
                    `);
                }
            })
        .on("mouseout", () => {
            if (tooltipsEnabled) {
                d3.select("#tooltip")
                    .style("opacity", 0)
                    .style("display", "none");
                }
            });

    g.append("text")
        .attr("x", (width / 2 - 70))
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .style("text-decoration", "underline")
        .text("Happiness Score Breakdown by Country");

    g.append("text")
        .attr("x", (width / 2) - 100)
        .attr("y", height - 70)
        .attr("text-anchor", "middle")
        .style("font-size", "15px")
        .text("Country");

    g.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2) + 70)
        .attr("dy", "1em")
        .attr("text-anchor", "middle")
        .style("font-size", "15px")
        .text("Happiness Score");

    const legend = g.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .attr("text-anchor", "start")
        .attr("transform", `translate(${c_width + margin.right - 150},${margin.top + 50})`)
        .selectAll("g")
        .data(keys.slice().reverse())
        .enter().append("g")
        .attr("transform", (d, i) => `translate(0,${i * 20})`);

    legend.append("rect")
        .attr("width", 19)
        .attr("height", 19)
        .attr("fill", color);
    
    legend.append("text")
        .attr("x", 24)
        .attr("y", 9.5)
        .attr("dy", "0.32em")
        .text(d => variableNames[d]);
    
    if(scenes[currentScene].stackedAnnotations) {
        addAnnotations(svg, scenes[currentScene].annotations);
    }   
}

function scene1_scatterplot(data) {
    const filtered_data = data.filter(d => d.hdi !== 0);

    const width = 850;
    const height = 700;
    const margin = { top: 40, right: 130, bottom: 100, left: 60 };
    const c_width = width - margin.left - margin.right;
    const c_height = height - margin.top - margin.bottom;

    const svg = d3.select('#scatterplot')
        .html("")
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const x = d3.scaleLinear()
        .domain(d3.extent(filtered_data, d => d.hdi))
        .nice()
        .range([0, c_width]);

    const y = d3.scaleLinear()
        .domain(d3.extent(filtered_data, d => d.ladderScore))
        .nice()
        .range([c_height, 0]);

    const color = d3.scaleOrdinal(d3.schemePaired)
        .domain([...new Set(filtered_data.map(d => d.subregion))]);

    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    g.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${c_height})`)
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(y));

    g.selectAll(".dot")
        .data(filtered_data)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("cx", d => x(d.hdi))
        .attr("cy", d => y(d.ladderScore))
        .attr("r", 5)
        .attr("fill", d => color(d.subregion))
        .attr("opacity", 0.7);

    g.selectAll(".dot")
        .on("mouseover", (event, d) => {
            if (tooltipsEnabled) {
                d3.select("#tooltip")
                    .style("left", `${event.pageX + 20}px`)
                    .style("top", `${event.pageY}px`)
                    .style("opacity", 1)
                    .style("display", "block")
                    .html(`
                        <strong>Country:</strong> ${d.country}<br>
                        <strong>Subregion:</strong> ${d.subregion}<br>
                        <strong>HDI:</strong> ${d.hdi}<br>
                        <strong>Happiness Score:</strong> ${d.ladderScore}
                    `);
            }
        })
        .on("mouseout", () => {
            if (tooltipsEnabled) {
                d3.select("#tooltip")
                    .style("opacity", 0)
                    .style("display", "none");
            }
        });

    g.append("text")
        .attr("x", (width / 2 - 30))
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .style("text-decoration", "underline")
        .text("Happiness Score vs HDI by Country");

    g.append("text")
        .attr("x", (width / 2) - 100)
        .attr("y", height - 70)
        .attr("text-anchor", "middle")
        .style("font-size", "15px")
        .text("HDI");

    g.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2) + 70)
        .attr("dy", "1em")
        .attr("text-anchor", "middle")
        .style("font-size", "15px")
        .text("Happiness Score");

    const legend = g.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .attr("text-anchor", "start")
        .selectAll("g")
        .data(color.domain())
        .enter().append("g")
        .attr("transform", (d, i) => `translate(0,${i * 20})`)
        .on("click", function (event, subregion) {
            if (currentScene === scenes.length - 1) {
                if (selectedSubregion === subregion) {
                    selectedSubregion = null;
                    resetHighlight();
                } else {
                    selectedSubregion = subregion;
                    highlightSubregion(subregion);
                }
            }
        });

    legend.append("rect")
        .attr("x", c_width - 10)
        .attr("width", 19)
        .attr("height", 19)
        .attr("fill", color);

    legend.append("text")
        .attr("x", c_width+14)// - 24)
        .attr("y", 9.5)
        .attr("dy", "0.32em")
        .text(d => d);

    if(scenes[currentScene].scatterAnnotations) {
        addAnnotations(svg, scenes[currentScene].scatterplotAnnotations);
    }
    
    const scene = scenes[currentScene];
    if (scene.fixedTooltipCountry && scene.disableTooltips) {
        const countryData = filtered_data.find(d => d.country === scene.fixedTooltipCountry);
        if (countryData) {
            d3.select("#tooltip")
                .style("left", scene.fixedTooltipPosX)
                .style("top", scene.fixedTooltipPosY)
                .style("opacity", 1)
                .style("display", "block")
                .html(`
                    <strong>Country:</strong> ${countryData.country}<br>
                    <strong>Subregion:</strong> ${countryData.subregion}<br>
                    <strong>HDI:</strong> ${countryData.hdi}<br>
                    <strong>Happiness Score:</strong> ${countryData.ladderScore}<br>
                `);
        }
    } else {
        d3.select("#tooltip").style("opacity", 0).style("display", "none");
    }
}

let selectedSubregion = null;

function handleSubregionClick(subregion) {
    const scene = scenes[currentScene];
    if (scene.selectedSubregion === subregion) {
        scene.selectedSubregion = null;
        resetHighlight();
    } else {
        scene.selectedSubregion = subregion;
        highlightSubregion(subregion);
    }
}

function addScatterplotLegendListeners() {
    d3.selectAll(".scatterplot-legend-item")
        .on("click", function (event, d) {
            handleSubregionClick(d);
        });
}

function filterBarChart(filter) {
    switch (filter) {
        case 'all':
            currentBarChartData = mainData;
            break;
        case 'top10':
            currentBarChartData = mainData.slice(0, 10);
            break;
        case 'top20':
            currentBarChartData = mainData.slice(0, 20);
            break;
        case 'top30':
            currentBarChartData = mainData.slice(0, 30);
            break;
        case 'bottom10':
            currentBarChartData = mainData.slice(-10);
            break;
        case 'bottom20':
            currentBarChartData = mainData.slice(-20);
            break;
        case 'bottom30':
            currentBarChartData = mainData.slice(-30);
            break;
    }
    scene1(currentBarChartData);
}

function highlightSubregion(subregion) {
    d3.selectAll(".dot")
        .attr("opacity", d => d.subregion === subregion ? 1 : 0.1)
        .attr("stroke", d => d.subregion === subregion ? "black" : "none")
        .attr("stroke-width", d => d.subregion === subregion ? 2 : 0);

    d3.selectAll(".serie rect")
        .attr("opacity", d => d.data.subregion === subregion ? 1 : 0.1);
}

function resetHighlight() {
    d3.selectAll(".dot")
        .attr("opacity", 0.7)
        .attr("stroke", "none")
        .attr("stroke-width", 0);

    d3.selectAll(".serie rect")
        .attr("opacity", 1);
}

function updateScene() {
    const scene = scenes[currentScene];

    console.log(scene.description);
    document.getElementById('scene_narrative').innerHTML = scene.description;

    currentBarChartData = scene.barChartFilter(mainData);
    currentScatterplotData = scene.scatterplotFilter(mainData);

    scene1(currentBarChartData);
    scene1_scatterplot(currentScatterplotData);

    addScatterplotLegendListeners();

    tooltipsEnabled = !scene.disableTooltips;

    if (scene.fixedTooltipCountry && scene.disableTooltips) {
        const countryData = currentBarChartData.find(d => d.country === scene.fixedTooltipCountry);
        if (countryData) {
            d3.select("#tooltip")
                .style("left", scene.fixedTooltipPosX)
                .style("top", scene.fixedTooltipPosY)
                .style("opacity", 1)
                .style("display", "block")
                .html(`
                    <strong>Country:</strong> ${countryData.country}<br>
                    <strong>Subregion:</strong> ${countryData.subregion}<br>
                    <strong>HDI:</strong> ${countryData.hdi}<br>
                    <strong>Happiness Score:</strong> ${countryData.ladderScore}<br>
                    <br>
                    <strong>--- Happiness Score Breakdown ---</strong><br>
                    <strong>GDP per capita:</strong> ${countryData.gdp}<br>
                    <strong>Social Support:</strong> ${countryData.socialSupport}<br>
                    <strong>Healthy Life Expectancy:</strong> ${countryData.lifeExpectancy}<br>
                    <strong>Freedom to make life choices:</strong> ${countryData.freedom}<br>
                    <strong>Generosity:</strong> ${countryData.generosity}<br>
                    <strong>Perception of Corruption:</strong> ${countryData.corruption}<br>
                    <strong>Dystopia + Residual:</strong> ${countryData.dystopiaResidual}
                `);
        }
    } else {
        d3.select("#tooltip").style("opacity", 0).style("display", "none");
    }
    
    if (scene.highlightSubregions) {
        const top10Countries = mainData.sort((a, b) => a.rank - b.rank).slice(0, 10);
        const highlightedSubregions = new Set(top10Countries.map(d => d.subregion));

        d3.selectAll(".dot")
            .attr("opacity", d => highlightedSubregions.has(d.subregion) ? 1 : 0.2);

        d3.selectAll(".serie rect")
            .attr("opacity", d => highlightedSubregions.has(d.data.subregion) ? 1 : 0.2);
    }

    if (currentScene === scenes.length - 1) {
        d3.select('.chart-filters').classed('hidden', false);
    } else {
        d3.select('.chart-filters').classed('hidden', true);
    }
}

function prevScene() {
    if (currentScene > 0) {
        currentScene--;
        updateScene();
    }
}

function nextScene() {
    if (currentScene < scenes.length - 1) {
        currentScene++;
        updateScene();
    }
}

async function main() {
    mainData = await loadData();
    mainData = processSceneOneData(mainData);

    updateScene();
}

main();
    