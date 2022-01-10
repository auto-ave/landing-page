import queuesImage from '@public/images/no-more-queues.png';
import diverseOptionsImage from '@public/images/man-cleaning.png';
import customerSatisfactionImage from '@public/images/customer-satisfaction.png';

import clockIcon from '@public/icons/clock.svg'
import smileIcon from '@public/icons/smile.svg'
import tagsIcon from '@public/icons/tags.svg'

export const LANDING_WHY_US = [
    {
        'key': 'whyus1',
        'title': 'No more queues',
        'description': 'Book services according to your schedule with zero wait time.',
        'image': queuesImage,
        'icon': clockIcon,
        'marginTop': '12',
    },
    {
        'key': 'whyus2',
        'title': 'Diverse Options',
        'description': 'Choose from a variety of stores and services near you, select the store which suits you best.',
        'image': diverseOptionsImage,
        'icon': tagsIcon,
        'marginTop': '6',
    },
    {
        'key': 'whyus3',
        'title': 'Customer Satisfaction',
        'description': 'Our best in class feedback system makes the service provider work efficiently and accurately.',
        'image':customerSatisfactionImage,
        'icon': smileIcon,
        'marginTop': '0',
    },
]