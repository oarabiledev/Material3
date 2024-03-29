
var bottomBarContainer;

class bottomBarObject {
    constructor(barPropsInjson, parentLay) {
        this.drawBottomBar(barPropsInjson, parentLay, this)
    }

    setOnTouch(onTouchFunc) {
        this.onTouchFunc = onTouchFunc;
    }

    setRawAdjustment(distanceFromTop) {
        if (layoutInfo.toLowerCase().includes('linear')) {
            bottomBarContainer.SetMargins(0, distanceFromTop);
        } else {
            bottomBarContainer.SetPosition(0, distanceFromTop);
        }
    }

    drawBottomBar(barPropsInjson, parentLay, bottomBarObj) {

        let props = JSON.stringify(barPropsInjson);
        let info = JSON.parse(props);
        const icon1 = info.firstIcon;
        const icon2 = info.secondIcon;
        const icon3 = info.thirdIcon;
        const icon4 = info.fourthIcon;
        const fabIcon = info.fabIcon;

        bottomBarContainer = app.CreateLayout("Card", "Horizontal,Bottom,FillXY");

        bottomBarContainer.SetSize(null, 80, 'dp');
        bottomBarContainer.SetElevation(3, 'dp');


        if (layoutInfo.toLowerCase().includes('linear')) {
            bottomBarContainer.SetMargins(0, 0.9);
        } else {
            bottomBarContainer.SetPosition(0, 0.9);
        }
        const box = app.CreateLayout('Linear', 'Horizontal');
        bottomBarContainer.AddChild(box);
        box.SetSize(-1, 80, 'dp');

        const _icon1 = app.CreateText(icon1, null, null, 'H/VCenter,FillXY');
        _icon1.SetFontFile(defaultIcons);
        _icon1.SetTextSize(24);
        _icon1.SetOnTouchUp(function() {
            bottomBarObj.onTouchFunc(icon1);
        });

        _icon1.SetMargins(8, null, 16, null, 'dp');

        const _icon2 = app.CreateText(icon2, null, null, 'H/VCenter,FillXY');
        _icon2.SetFontFile(defaultIcons);
        _icon2.SetTextSize(24);
        _icon2.SetOnTouchUp(function() {
            bottomBarObj.onTouchFunc(icon2);
        });
        _icon2.SetMargins(8, null, 16, null, 'dp');

        const _icon3 = app.CreateText(icon3, null, null, 'H/VCenter,FillXY');
        _icon3.SetFontFile(defaultIcons);
        _icon3.SetTextSize(24);
        _icon3.SetOnTouchUp(function() {
            bottomBarObj.onTouchFunc(icon3);
        });
        _icon3.SetMargins(8, null, 16, null, 'dp');

        const _icon4 = app.CreateText(icon4, null, null, 'H/Vcenter,FillXY');
        _icon4.SetFontFile(defaultIcons);
        _icon4.SetTextSize(24);
        _icon4.SetOnTouchUp(function() {
            bottomBarObj.onTouchFunc(icon4);
        });
        _icon4.SetMargins(8, null, 16, null, 'dp');

        const fab = app.CreateLayout('Card', 'Right,FillXY');
        fab.SetSize(56, 56, 'dp');
        fab.SetElevation(0);
        fab.SetCornerRadius(16);
        fab.SetMargins(125, 12, 16, 12, 'dp');

        const _fabIcon = app.CreateText(fabIcon, null, null, 'H/VCenter,FillXY');
        _fabIcon.SetFontFile(defaultIcons);
        _fabIcon.SetOnTouchDown(function() {
            bottomBarObj.onTouchFunc(fabIcon);
        });

        _fabIcon.SetTextSize(24);
        fab.AddChild(_fabIcon);

        box.AddChild(_icon1);
        box.AddChild(_icon2);
        box.AddChild(_icon3);
        box.AddChild(_icon4);
        box.AddChild(fab);

        if (theme === 'light') {
            bottomBarContainer.SetBackColor(md_theme_light_surfaceVariant);
            _icon1.SetTextColor(md_theme_light_onPrimaryContainer);
            _icon2.SetTextColor(md_theme_light_onPrimaryContainer);
            _icon3.SetTextColor(md_theme_light_onPrimaryContainer);
            _icon4.SetTextColor(md_theme_light_onPrimaryContainer);
            fab.SetBackColor(md_theme_light_primaryContainer);
            _fabIcon.SetTextColor(md_theme_light_onPrimaryContainer);
        } else {
            bottomBarContainer.SetBackColor(md_theme_dark_surfaceVariant);
            _icon1.SetTextColor(md_theme_dark_onPrimaryContainer);
            _icon2.SetTextColor(md_theme_dark_onPrimaryContainer);
            _icon3.SetTextColor(md_theme_dark_onPrimaryContainer);
            _icon4.SetTextColor(md_theme_dark_onPrimaryContainer);
            fab.SetBackColor(md_theme_dark_primaryContainer);
            _fabIcon.SetTextColor(md_theme_dark_onPrimaryContainer);
        }
        parentLay.AddChild(bottomBarContainer);
    }
}

class navDrawerObject {
    constructor(drawerLayout, side, width) {
        this.drawNavDrawer(drawerLayout, side, width, this)
    }
    openDrawer(side) {
        app.OpenDrawer(side)
    }
    closeDrawer(side) {
        app.CloseDrawer(side)
    }
    removeDrawer(side) {

    }

    drawNavDrawer(drawerLayout, side, width) {
        _drawerContainer = app.CreateLayout('Card', 'FillXY')

        _drawerContainer.AddChild(drawerLayout)

        if (theme === 'dark') {
            _drawerContainer.SetBackColor(md_theme_dark_surface);
        } else {
            _drawerContainer.SetBackColor(md_theme_light_surface);
        }
        app.AddDrawer(_drawerContainer, side, width)
    }
}

var _seekBar;

class seekBarObject{
    constructor(value, range, width, parentLay){
        this.drawSeekBar(value, range, width, parentLay, this)
    }
    
    setVisibility(mode){
        _seekBar.SetVisibility(mode)
    }
    
    setSize(width,height,options){
        _seekBar.SetSize(width,height,options)
    }
    setPosition(left, top, width, height, options ){
        _seekBar.SetPosition(left, top, width, height, options )
    }
    setOnTouch(onTouch){
        _seekBar.SetOnTouch(onTouch)
    }
    getValue(){
        return _seekBar.GetValue();
    }
    isVisible(){
        return _seekBar.IsVisible();
    }
    animate(type,callback,time){
        _seekBar.Animate(type,callback,time)
    }
    goneComponent(){
        _seekBar.Gone();
    }
    setDecimals(decimals){
        _seekBar.SetDecimals(decimals)
    }
    
    drawSeekBar(value, range, width, parentLay, seekObj){

    const seekColor = function (){
        return stateColor(md_theme_light_onSurfaceVariant,md_theme_dark_onSurfaceVariant);
    }
    
    _seekBar = MUI.CreateSeekBar(value,range,width,seekColor())
    
    parentLay.AddChild(_seekBar)
    }
}


var _bSheet;
class slideSheetObject{
    constructor(sheetLayout, width, options){
        this.drawSlideSheet(sheetLayout, width, options)
    }
    
    dismissSheet() {
        _bSheet.Animate('SlideToRight', function() {
        app.DestroyLayout(slideSheetContainer);
        }, 210);
    }
    
    showSheet() {
        drawSlideSheet(sheetLayout, width, options);
    }
    
    drawSlideSheet(sheetLayout, width, options) {
    const slideSheetContainer = app.CreateLayout('Linear', 'FillXY,VCenter,Bottom,Right');
    slideSheetContainer.SetSize(1, 1);
    slideSheetContainer.SetOnTouchUp(dismissSlideSheet);

    _bSheet = app.CreateLayout('Card', 'FillX,VCenter,Right');
    _bSheet.SetSize(width, 1);
    _bSheet.SetCornerRadius();
    _bSheet.Animate('BounceRight', null, 550);
    _bSheet.AddChild(sheetLayout);
    slideSheetContainer.AddChild(_bSheet);
    
    slideSheetContainer.SetBackAlpha(0.33);
    
    app.AddLayout(slideSheetContainer);
    
    slideSheetContainer.SetBackColor(stateColor(md_theme_light_scrim,md_theme_dark_scrim))
    _bSheet.SetBackColor(stateColor(md_theme_light_surfaceVariant,md_theme_dark_surfaceVariant))

    }

}

class bottomSheetObject{
    constructor(sheetLayout, height, options){
        
    }
    
    dismissSheet() {
        dismissBSheet();
    }
    showSheet() {
        this.drawBottomSheet(sheetLayout, height, options);
    }
    
    drawBottomSheet(sheetLayout, height, options) {
    bottomSheetContainer = app.CreateLayout('Linear', 'FillXY,VCenter,Bottom');
    bottomSheetContainer.SetSize(1, 1);
    bottomSheetContainer.SetOnTouchUp(dismissBSheet);
    bottomSheetContainer.SetBackAlpha(0.33);

    _bSheet = app.CreateLayout('Card', 'FillX,VCenter,Bottom');
    _bSheet.SetSize(-1, height);
    _bSheet.SetCornerRadius(28);
    _bSheet.Animate('BounceBottom', null, 550);
    _bSheet.AddChild(sheetLayout);
    bottomSheetContainer.AddChild(_bSheet);

    bottomSheetContainer.SetBackColor(stateColor(md_theme_light_scrim,md_theme_dark_scrim));
    _bSheet.SetBackColor(stateColor(md_theme_light_surfaceVariant,md_theme_dark_surfaceVariant))
    
    app.AddLayout(bottomSheetContainer);
    
    }
}
