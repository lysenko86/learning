// source: https://youtu.be/nyIpDs2DJ_c?t=1938
// source: https://www.youtube.com/watch?v=MNcl1Fni4cw&list=PLNkWIWHIRwMEm1FgiLjHqSky27x5rXvQa&index=3
// source: https://www.youtube.com/watch?v=FltLrtKWMak&list=PLNkWIWHIRwMEm1FgiLjHqSky27x5rXvQa&index=4



// ----------
// тип Enum з власними значеннями
// ----------
enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard
console.log(membership) // буде 1, верне просто порядковий номер

const membershipReverse = Membership[2]
console.log(membershipReverse) // буде Premium



// Інший спосіб запису
enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social) // буде INSTAGRAM
