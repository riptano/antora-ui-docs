
type Settings={
    lang?:string,
    topTitle?:TopTitle;
    sampleAppGallery?:SampleAppGallery,
    bottomSidebar?:BottomSidebar
}

type TopTitle={
    active:boolean,
    title:string
}

type SampleAppGallery={
    active:boolean,
    title:string,
    icon:string,
    content:string,
    link:string
}

type BottomSidebar={
    active:boolean,
    title:string,
    listItem:ListItem[]
}

type ListItem={
    item:string,
    icon:string,
    link:string
}