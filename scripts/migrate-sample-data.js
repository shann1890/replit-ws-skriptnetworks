// Run this script once to migrate sample data to PostgreSQL
// Usage: node scripts/migrate-sample-data.js

import { PostgresStorage } from '../server/storage-postgres.js';

const sampleArticles = [
  {
    title: "The Future of Cybersecurity in Malaysian Businesses",
    excerpt: "Exploring emerging cybersecurity threats and how Malaysian businesses can stay protected in 2024.",
    content: `As cyber threats continue to evolve, Malaysian businesses must adapt their security strategies to stay protected. This comprehensive guide covers the latest cybersecurity trends, threats, and best practices for 2024.

## Key Cybersecurity Challenges in Malaysia

1. **Ransomware Attacks**: Increasing sophistication and targeting of local businesses
2. **Cloud Security**: As more companies move to cloud infrastructure
3. **Remote Work Vulnerabilities**: Securing distributed workforces
4. **IoT Device Security**: Managing smart devices in business environments

## Recommended Security Measures

### Multi-Factor Authentication (MFA)
Implement MFA across all critical systems and user accounts.

### Regular Security Audits
Conduct quarterly security assessments to identify vulnerabilities.

### Employee Training
Regular cybersecurity awareness training for all staff members.

### Incident Response Plan
Develop and test incident response procedures.

## Conclusion
Staying ahead of cybersecurity threats requires proactive planning, regular updates, and professional security solutions tailored to your business needs.`,
    category: "Cybersecurity",
    tags: ["cybersecurity", "malaysia", "business", "security"],
    published: true,
  },
  {
    title: "Smart Home Automation: A Complete Guide for Malaysian Homes",
    excerpt: "Transform your home with intelligent automation systems designed for tropical climates and local preferences.",
    content: `Smart home technology has revolutionized how we interact with our living spaces. In Malaysia's unique climate and cultural context, smart home automation offers specific benefits and considerations.

## Why Smart Homes Make Sense in Malaysia

### Climate Control Efficiency
- **Tropical Climate**: Automated cooling systems can significantly reduce energy costs
- **Monsoon Season**: Smart sensors can detect humidity and adjust accordingly
- **Energy Savings**: Intelligent scheduling can cut electricity bills by 20-30%

### Security Enhancement
- **Remote Monitoring**: Check your home while traveling
- **Smart Locks**: Access control for family members and domestic helpers
- **CCTV Integration**: Modern systems with mobile alerts

## Popular Smart Home Solutions

### 1. Smart Air Conditioning
- **Automated Scheduling**: Cool homes before arrival
- **Energy Monitoring**: Track usage and optimize efficiency
- **Integration**: Works with voice assistants and mobile apps

### 2. Smart Lighting
- **Motion Detection**: Lights that turn on/off automatically
- **Scheduling**: Simulate presence when away
- **Color Temperature**: Adjust lighting throughout the day

### 3. Smart Security Systems
- **Door/Window Sensors**: Monitor entry points
- **Smart Cameras**: HD recording with cloud storage
- **Mobile Alerts**: Instant notifications of activities

## Getting Started

### Assessment Phase
1. Evaluate current electrical infrastructure
2. Identify priority areas for automation
3. Set budget and timeline

### Implementation
1. Start with basic systems (lighting, security)
2. Gradually add more complex automation
3. Ensure reliable WiFi coverage throughout the home

### Professional Installation
For optimal results, work with certified smart home installers who understand local building codes and climate considerations.

## Cost Considerations

**Basic Setup**: RM 2,000 - 5,000
- Smart lighting and basic security

**Intermediate System**: RM 5,000 - 15,000  
- Include HVAC automation and advanced security

**Full Automation**: RM 15,000+
- Comprehensive whole-home integration

## Conclusion
Smart home automation in Malaysia offers significant benefits in energy efficiency, security, and convenience. Start small and expand your system over time for the best results.`,
    category: "Smart Home",
    tags: ["smart-home", "automation", "iot", "malaysia"],
    published: true,
  },
  {
    title: "Network Infrastructure Best Practices for Growing SMEs",
    excerpt: "Essential network design principles and scalable infrastructure solutions for small and medium enterprises.",
    content: `Small and medium enterprises (SMEs) face unique challenges when designing their network infrastructure. This guide provides practical advice for building scalable, secure networks that grow with your business.

## Core Network Design Principles

### Scalability First
Design your network to accommodate growth without major overhauls:
- **Structured Cabling**: Use Cat 6A or fiber for future-proofing
- **Modular Switches**: Choose managed switches that can be stacked
- **VLAN Planning**: Segment network traffic from the start

### Security by Design
Implement security measures at every network layer:
- **Firewall Configuration**: Enterprise-grade protection
- **Network Segmentation**: Isolate different business functions
- **Access Control**: Role-based network access
- **Monitoring**: Real-time threat detection

## Essential Infrastructure Components

### 1. Core Network Equipment

**Router**
- Business-grade router with VPN capabilities
- Redundant internet connections for failover
- Quality of Service (QoS) management

**Switches**
- Managed switches with VLAN support
- Power over Ethernet (PoE) for IP phones and wireless access points
- Stack-able for easy expansion

**Wireless Access Points**
- Enterprise-grade WiFi 6/6E access points
- Central management controller
- Guest network isolation

### 2. Network Security

**Firewall**
- Next-generation firewall with intrusion prevention
- Application-aware filtering
- VPN capabilities for remote access

**Network Access Control**
- 802.1X authentication for wired and wireless
- Certificate-based device authentication
- Guest access management

### 3. Monitoring and Management

**Network Monitoring**
- Real-time bandwidth and performance monitoring
- Automated alerting for network issues
- Historical reporting for capacity planning

**Configuration Management**
- Centralized device configuration
- Automated backup of network configurations
- Change tracking and rollback capabilities

## Implementation Strategy

### Phase 1: Foundation (Month 1-2)
1. Install core infrastructure (router, firewall, main switches)
2. Implement basic security policies
3. Set up internet connectivity and VPN

### Phase 2: Expansion (Month 3-4)
1. Deploy wireless infrastructure
2. Implement network monitoring
3. Configure advanced security features

### Phase 3: Optimization (Month 5-6)
1. Fine-tune performance and security settings
2. Implement advanced monitoring and alerting
3. Document network configuration and procedures

## Budget Planning

**Small Office (10-20 users)**: RM 15,000 - 25,000
- Basic managed infrastructure with essential security

**Medium Office (21-50 users)**: RM 25,000 - 50,000
- Advanced features with redundancy and monitoring

**Growing Business (50+ users)**: RM 50,000+
- Enterprise-grade solutions with full redundancy

## Common Pitfalls to Avoid

1. **Underestimating Growth**: Plan for 2-3x current requirements
2. **Skipping Documentation**: Maintain current network diagrams
3. **Ignoring Monitoring**: Implement proactive monitoring from day one
4. **Cheap Equipment**: Invest in quality business-grade equipment
5. **No Backup Plan**: Always have redundancy for critical components

## Professional Services

Consider partnering with a qualified network consultant for:
- Initial network design and planning
- Security assessment and implementation
- Ongoing monitoring and maintenance
- Staff training on network management

## Conclusion

A well-designed network infrastructure is crucial for SME growth and security. By following these best practices and planning for scalability, your business can build a network that supports current needs while accommodating future expansion.`,
    category: "Networking",
    tags: ["networking", "sme", "infrastructure", "business"],
    published: false,
  }
];

async function migrateData() {
  try {
    console.log('Migrating sample articles to PostgreSQL...');
    
    const storage = new PostgresStorage();
    
    for (const article of sampleArticles) {
      const created = await storage.createArticle(article);
      console.log(`✓ Migrated: ${created.title}`);
    }
    
    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

migrateData();