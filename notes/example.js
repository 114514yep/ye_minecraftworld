// priority: 0

// Visit the wiki for more info - https://kubejs.com/

//console.info('Hello, World! (Loaded server scripts)')



//如一中例，后接id("")可添加配方id，非必需，无命名空间默认为minecraft:，
ServerEvents.recipes(event => {
    //工作台，有序
    //工作台的输入必须相同为标签，或者全为物品id，即要么全有#，要么全没有
    event.shaped(Item.of('minecraft:diamond',2), [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: '#minecraft:planks',
        B: '#minecraft:wooden_buttons'
    }).id("yeyeye");
    //工作台，无序
    event.shapeless(Item.of('minecraft:redstone',2), [
        'minecraft:planks','#minecraft:wooden_buttons'
    ]);
    //有关time均为20tick为1秒
    //燃烧：产物，原料，经验，时间
    //熔炉
    event.smelting('minecraft:redstone','#minecraft:wooden_buttons',1,100);
    //烟熏炉
    event.smoking('minecraft:redstone','#minecraft:wooden_buttons',1,100);
    //高炉
    event.blasting('minecraft:redstone','#minecraft:wooden_buttons',1,100);
    //营火
    event.campfireCooking('minecraft:redstone','#minecraft:wooden_buttons',1,100);
    //物品燃烧设置
    Item.getItem('minecraft:redstone').burnTime=20*20;
    //锻造台
    //输出，模板,中间那格(装备)，右边那格(矿物)
    event.smithing('minecraft:diamond','minecraft:grass','minecraft:end_crystal','minecraft:clock');
    //切石机：将石头放入，可生成石砖石台阶等
    //输出，输入
    event.stonecutting('minecraft:amethyst_shard','minecraft:obsidian');
    event.stonecutting('minecraft:blackstone','minecraft:obsidian');
});