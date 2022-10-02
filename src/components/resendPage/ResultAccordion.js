import React from "react";

function ResultAccordion (){


    return(
<section className="section">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="section-heading heading-center">
                    <h2>Accordion</h2>
                </div>
                <div className="accordion">
                    <div className="row gutters-default">
                        <div className="col-lg-6 col-12">
                            <ul className="accordion-list">
                                <li className="accordion-item section-bgc">
                                    <div className="accordion-trigger">Can I track my order?</div>
                                    <div className="accordion-content content">
                                        <p>Yes, you can! After placing your order you will receive an order
                                            confirmation via email. Each order starts production 15 minutes after
                                            your order is placed. Within a few hours of you placing your order, you
                                            will receive an expected delivery time. When the order will be ready for
                                            delivery, you will receive another email with the tracking number and a
                                            link to trace the order online with the courier.</p>
                                    </div>
                                </li>
                                <li className="accordion-item section-bgc">
                                    <div className="accordion-trigger">How can I change something in my order?</div>
                                    <div className="accordion-content content">
                                        <p>If you need to change something in your order, please contact us
                                            immediately. We usually process orders within 30 minutes, and once we
                                            have processed your order, we will be unable to make any changes.</p>
                                    </div>
                                </li>
                                <li className="accordion-item section-bgc">
                                    <div className="accordion-trigger">How can I pay for my order?</div>
                                    <div className="accordion-content content">
                                        <p>We accept Visa, MasterCard, and American Express credit and debit cards
                                            for your convenience.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-12">
                            <ul className="accordion-list">
                                <li className="accordion-item section-bgc">
                                    <div className="accordion-trigger">When will my order be delivered?</div>
                                    <div className="accordion-content content">
                                        <p>Delivery times will depend on your location. Once payment is confirmed
                                            your order will be packaged. Delivery can be expected within 10 business
                                            days.</p>
                                    </div>
                                </li>
                                <li className="accordion-item section-bgc">
                                    <div className="accordion-trigger">Can I return an item?</div>
                                    <div className="accordion-content content">
                                        <p>Please contact our administrators for more information on returning
                                            products purchased on our website.</p>
                                    </div>
                                </li>
                                <li className="accordion-item section-bgc">
                                    <div className="accordion-trigger">Do you provide any scripts?</div>
                                    <div className="accordion-content content">
                                        <p>Our templates do not include any additional scripts. Newsletter
                                            subscriptions, search fields, forums, image galleries (in HTML versions
                                            of Flash products) are inactive. Basic scripts can be easily added at
                                            www.TemplateTuning.com If you are not sure that the element you’re
                                            interested in is active please contact our Support Chat for
                                            clarification.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


    )

}

export default ResultAccordion;