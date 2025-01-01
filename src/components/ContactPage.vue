<template>
    <main>
        <h1>Contact Us</h1>
        <div class="content">
            <div class="contacts">
                <h2>Contact Information</h2>
                <ul>
                    <li><span><img src="@/assets/images/call.png" /></span> <a href="tel:+23058187657"> +230 5818 7657 </a></li>
                    <li><span><img src="@/assets/images/mail.png" /></span><a href="mailto:info@angahub.com"> info@angahub.com</a></li>
                    <li><span><img src="@/assets/images/location.png" /></span> Port Louis, Mauritius </li>
                </ul>
                <div class="links">
                    <a href="https://x.com/angahub" target="_blank"><img src="@/assets/images/x.png" /></a>
                    <a href="https://www.linkedin.com/company/angahub" target="_blank"><img src="@/assets/images/linkedin.png" /></a>
                    <a href="" target="_blank"><img src="@/assets/images/whatsapp.png" /></a>
                </div>
            </div>
            <div class="forms">
                <h3>Any question or remarks? Just write us a message!</h3>
                <form>
                    <div class="horizontal-group">
                        <div class="input-group">
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" placeholder="Happy" required autocomplete="given-name" />
                            
                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" placeholder="Doe" required autocomplete="family-name" />
                        </div>
                        <div class="input-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="happy@doe.com" required autocomplete="email" />
                            
                            <label for="phone-number">Phone Number</label>
                            <input type="text" id="phone-number" placeholder="+1 012 3456 789" autocomplete="tel" />
                        </div>
                    </div>
                    
                    <div class="input-group">
                        <fieldset>
                            <legend>Select Subject?</legend>
                            <div class="radio-group">
                                <label class="radio-option">
                                    <input type="radio" name="subject" value="general" checked autocomplete="off">
                                    General Inquiry
                                </label>
                                <label class="radio-option">
                                    <input type="radio" name="subject" value="pricing" autocomplete="off">
                                    Pricing Inquiry
                                </label>
                                <label class="radio-option">
                                    <input type="radio" name="subject" value="company" autocomplete="off">
                                    Company Inquiry
                                </label>
                                <label class="radio-option">
                                    <input type="radio" name="subject" value="tech" autocomplete="off">
                                    Technical Inquiry
                                </label>
                            </div>
                        </fieldset>
                    </div>
                    
                    <div class="input-group">
                        <label for="message">Message</label>
                        <textarea id="message" placeholder="Write your message.." autocomplete="off"></textarea>
                    </div>
                    
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </main>
</template>
    
<!-- <script>    

</script> -->

<style scoped src="@/assets/styles/contactpage.css"></style>

    