<template>
    <div class="company-page">
        <div class="company-hero">
            <h1>ANGA Hub</h1>
            <h2>Pioneering Africa's Digital Future</h2>
            <p class="tagline">Where Innovation Meets Excellence</p>
        </div>
        
        <section class="company-overview">
            <div class="overview-content">
                <h2>Our Story</h2>
                <p>ANGA Hub was born from the shared vision of two passionate computer science students. Fueled by a desire to solve complex problems and build impactful systems, their mission was clear: to develop technology that would unite and uplift the African continent. The name "ANGA" - Africa NextGen Apex - crystallizes this ambition, representing our dedication to placing Africa at the forefront of technological advancement and innovation.</p>
                <p>From late-night coding sessions and a relentless pursuit of excellence, what started as a student-led initiative has blossomed into a dynamic force for digital transformation. We are committed to leveraging cutting-edge solutions and strategic collaborations to address Africa's unique challenges and unlock its vast potential. Our journey is one of youthful ingenuity maturing into impactful, real-world solutions, always driven by a core belief in technology's power to foster a brighter future for the continent.</p>
            </div>
            <div class="overview-stats">
                <div class="stat-item">
                    <span class="stat-number">2+</span>
                    <span class="stat-label">Years of Innovation</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">3+</span>
                    <span class="stat-label">Completed Projects</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">2+</span>
                    <span class="stat-label">Countries Served</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">100%</span>
                    <span class="stat-label">Client Satisfaction</span>
                </div>
            </div>
        </section>
        
        <section class="company-pillars">
            <h2>Our Strategic Pillars</h2>
            <div class="pillars-container">
                <div class="pillar-card">
                    <div class="pillar-icon">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <h3>Innovation Hub</h3>
                    <p>Creating cutting-edge solutions that address Africa's unique challenges and opportunities.</p>
                </div>
                <div class="pillar-card">
                    <div class="pillar-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3>Talent Incubator</h3>
                    <p>Nurturing the next generation of African tech talent through mentorship and skills development.</p>
                </div>
                <div class="pillar-card">
                    <div class="pillar-icon">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <h3>Strategic Partnerships</h3>
                    <p>Collaborating with industry leaders to amplify our impact and reach across the continent.</p>
                </div>
                <div class="pillar-card">
                    <div class="pillar-icon">
                        <i class="fas fa-globe-africa"></i>
                    </div>
                    <h3>Pan-African Expansion</h3>
                    <p>Building a continental presence to serve diverse markets with localized solutions.</p>
                </div>
            </div>
        </section>
        
        <section class="leadership">
            <h2>Leadership Team</h2>
            <div class="leadership-intro">
                <p>ANGA Hub is spearheaded by its co-founders, Edwin Shayo and Alfred Moyo. With a shared passion for technology and a unified vision for Africa's digital empowerment, they guide the company's strategic direction and foster a culture of innovation and excellence.</p>
            </div>
            <div class="leadership-grid">
                <div class="leader-card">
                    <div class="leader-photo placeholder-photo"></div>
                    <h3>Edwin Shayo</h3>
                    <p class="leader-title">Co-founder</p>
                    <p class="leader-bio">Edwin brings a wealth of technical expertise and a passion for building scalable, impactful solutions that address Africa's unique digital challenges.</p>
                </div>
                <div class="leader-card">
                    <div class="leader-photo placeholder-photo"></div>
                    <h3>Alfred Moyo</h3>
                    <p class="leader-title">Co-founder</p>
                    <p class="leader-bio">Alfred's strategic vision and deep understanding of the African market drive ANGA Hub's growth and commitment to empowering businesses across the continent.</p>
                </div>
            </div>
        </section>
        
        <section class="company-future">
            <h2>Our Future Vision</h2>
            <div class="future-content">
                <p>At ANGA Hub, we're building more than a company – we're cultivating an ecosystem that will power Africa's technological renaissance. Our roadmap includes:</p>
                <ul>
                    <li>Expanding our innovation hubs to 10 African countries by 2027</li>
                    <li>Launching a venture capital fund to support early-stage African tech startups</li>
                    <li>Developing proprietary technologies that address critical infrastructure challenges</li>
                    <li>Creating a pan-African network of tech talent and resources</li>
                    <li>Establishing strategic partnerships with global technology leaders</li>
                </ul>
                <p>We invite you to join us on this journey as we redefine what's possible for African technology and innovation.</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'CompanyPage',
};
</script>

<style scoped>
.company-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    color: #F0F0F5;
}

h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
}

h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
}

h2 {
    font-size: 1.8rem;
    margin-bottom: 25px;
    color: #F0F0F5;
}

p {
    line-height: 1.6;
    margin-bottom: 15px;
}

section {
    margin-bottom: 80px;
}

/* Hero Section */
.company-hero {
    text-align: center;
    margin-bottom: 60px;
}

.company-hero h2 {
    font-size: 2rem;
    margin: 15px 0;
    font-weight: 500;
}

.tagline {
    font-size: 1.2rem;
    font-style: italic;
    opacity: 0.9;
}

/* Company Overview */
.company-overview {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: center;
    background: rgba(25, 25, 65, 0.3);
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.overview-content {
    flex: 1;
    min-width: 300px;
}

.overview-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    flex: 1;
    min-width: 300px;
}

.stat-item {
    text-align: center;
    padding: 20px;
    background: rgba(25, 25, 65, 0.5);
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease;
}

.stat-item:hover {
    transform: translateY(-5px);
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.stat-label {
    font-size: 0.9rem;
    opacity: 0.9;
}

/* Strategic Pillars */
.pillars-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.pillar-card {
    background: rgba(25, 25, 65, 0.3);
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pillar-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.pillar-icon {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #8A2BE2;
}

.pillar-card h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: #F0F0F5;
}

/* Leadership Team */
.leadership-intro {
    max-width: 800px;
    margin: 0 auto 40px;
    text-align: center;
}

.leadership-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.leader-card {
    background: rgba(25, 25, 65, 0.3);
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease;
}

.leader-card:hover {
    transform: translateY(-5px);
}

.leader-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 20px;
    overflow: hidden;
}

.placeholder-photo {
    background: linear-gradient(135deg, #8A2BE2 0%, #D32F2F 100%);
}

.leader-card h3 {
    font-size: 1.3rem;
    margin-bottom: 5px;
}

.leader-title {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 15px;
    font-style: italic;
}

.leader-bio {
    font-size: 0.95rem;
    line-height: 1.5;
}

/* Future Vision */
.company-future {
    background: rgba(25, 25, 65, 0.3);
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.company-future h2 {
    text-align: center;
    margin-bottom: 30px;
}

.future-content ul {
    margin: 20px 0 20px 20px;
}

.future-content li {
    margin-bottom: 10px;
    line-height: 1.5;
}

@media (max-width: 768px) {
    .company-overview {
        flex-direction: column;
    }
    
    .overview-stats {
        width: 100%;
    }
    
    .leadership-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}
</style>
