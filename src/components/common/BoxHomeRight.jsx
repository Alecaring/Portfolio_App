function BoxContainRight({ ToggleLocation }) {
    return (
        <div className="boxContainRight">
            <div className="boxContainRight_cont_header">
                <p className="boxContainRight_cont_header_p_common">5</p>
                <p className="boxContainRight_cont_header_p_common">0</p>
                <p className="boxContainRight_cont_header_p_common boxContainRight_cont_header_p_common_rotate">K</p>
            </div>
            <div className="boxContainRight_cont_bottom">
                <div className="boxContainRight_cont_bottom_left">
                    <ul className="boxContainRight_cont_bottom_left_ul">
                        <li onClick={ToggleLocation} className="boxContainRight_cont_bottom_left_ul_gray">LOCATIONS</li>
                        <li>TO & CPH</li>
                    </ul>
                </div>
                <div className="boxContainRight_cont_bottom_right">
                    <ul className="boxContainRight_cont_bottom_right_ul">
                        <li className="boxContainRight_cont_bottom_left_ul_gray HoverLinkServices">SERVICES</li>
                    </ul>
                    <div className="serivesOnHover serivesOnHover2">
                        <ul>
                            <h3>Web Development</h3>
                            <li>Full-stack development with modern frameworks (React, Laravel, Vue, etc.)</li>
                            <li>Responsive design for mobile and desktop</li>
                            <li>Custom web applications tailored to client needs</li>
                            <h3>Mobile App Development</h3>
                            <li>Cross-platform mobile apps (React Native, Expo)</li>
                            <li>UI/UX design for mobile interfaces</li>
                            <li>Performance optimization for iOS and Android</li>
                            <h3>API Development & Integration</h3>
                            <li>RESTful APIs for seamless backend communication</li>
                            <li>API integrations (e.g., third-party services, payment gateways)</li>
                            <li>Secure and scalable backend services</li>
                            <h3>E-commerce Solutions</h3>
                            <li>Custom-built e-commerce platforms</li>
                            <li>Integration of payment systems and shopping carts</li>
                            <li>Performance optimization and scalability</li>
                            <h3>Database Design & Management</h3>
                            <li>MySQL, PostgreSQL, and NoSQL database solutions</li>
                            <li>Efficient data models and relationships</li>
                            <li>Database optimization and management</li>
                            <h3>Content Management Systems (CMS)</h3>
                            <li>WordPress development</li>
                            <li>Custom CMS solutions</li>
                            <li>Maintenance and updates</li>
                            <h3>DevOps & Deployment</h3>
                            <li>Continuous integration/continuous deployment (CI/CD)</li>
                            <li>Cloud hosting and management (AWS, DigitalOcean)</li>
                            <li>Version control (Git, GitHub)</li>
                            <h3>Consulting & Support</h3>
                            <li>Technical consulting for startups and businesses</li>
                            <li>Project management and agile methodology</li>
                            <li>Ongoing maintenance and updates</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxContainRight;