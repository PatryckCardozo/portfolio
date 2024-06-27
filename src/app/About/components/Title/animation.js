export const slideUp = {
    initial: {
        y: 300
    },
    enter: {
        y: 0,
        transition: {duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5}
    }
}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 1}
    },
    closed: {
        opacity: 0,
        transition: {duration: 1}
    }
}
