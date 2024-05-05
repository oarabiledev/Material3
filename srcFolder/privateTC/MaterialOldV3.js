/* Material 3 For DroidScript                        

   This Project Is Licensed                                 
   Under The MIT License.                                       
   @2024                                                    
*/


_Boost(true)

let M3Config = 'M3Config';
const pluginVersion = 'v0.80';
app.Script('MaterialStore.js')


const ui = {
    
    
    InitializeUIKit: () => {
        if (isFirstRun) app.SaveBoolean('isFirstRun?', false, 'M3Config');
        
        if (!app.FileExists('baseTheme.json')) {
            warnDeveloper('baseTheme File Not Found In Directory');
        } else setM3BaseColors();
    },
    
    setTheme: (mode) =>{
        if (mode == undefined){
            //let baseTheme = jsonData.baseTheme;
            if (theme == 'light'){
                theme = 'dark';
            }
            else theme = 'light';
            setM3BaseColors();
        }
        
        else theme = mode;
        setM3BaseColors();
    },
    
    changeThemeKit: (themeFile) =>{
        if(app.FileExists(themeFile)){
            setM3BaseColors(true,themeFile)
        }
        else {
            warnDeveloper('Incorrect File Path/Name Given')
        }
    },
    
    getVersion: () => {
        return pluginVersion;
    },
    
    isFirstStart: () => {
        return isFirstRun;
    },
    
    
    clearConfiguration: () => {
        app.ClearData('M3Config');
    },
    
    createLayout: function(type, options, width, height, parentLay) {
        let lay;
        
        if (!parentLay) {
            lay = app.CreateLayout(type, options);
            lay.SetBackColor(backgroundClr.value)
            
            layoutType = type;
            layoutOptions = options;
        } 
        
        else {
            lay = app.AddLayout(parentLay, type, options);
            lay.SetBackColor(backgroundClr.value)
            lay.SetSize(width, height);
        }
        
        backgroundClr.subscribe((value)=>{
            lay.SetBackColor(value);
            //app.SetStatusBarColor(value);
        })
        
        return lay;
    },
 
    /*DONE*/
    addCenterAlignedAppBar: function (title, leadingIcon, controlIcons, parentLay) {
        return new centerAlignedAppBarObj(title, leadingIcon, controlIcons, parentLay);
    },
    
    addSmallAppBar: function(title, leadingIcon, controlIcons, parentLay){
        return new smallAppBarObject(title, leadingIcon, controlIcons, parentLay);
    },
    /*DONE*/
    addBottomAppBar: function (barPropsInjson, parentLayout) {
        return new bottomBarObject(barPropsInjson, parentLayout);
    },
    /*DONE*/
    addSearchBar: function(leadingIcon, trailingIcon, hint, width, parentLayout){
        return new searchBarObject(leadingIcon, trailingIcon, hint, width, parentLayout);
    },
    
    
    addBottomSheet: function (sheetLayout, height, options) {
        return new bottomSheetObject(sheetLayout, height, options);
    },
    
    addSlideSheet: function (sheetLayout, width, options) {
        return new slideSheetObject(sheetLayout, width, options);
    },
    


    addElevatedButton: function (btnName, width, height, icon, parentLay) {
        return new elevatedButtonObject(btnName, width, height, icon, parentLay);
    },
    
    addExtendedFAB: function (btnName, icon, parentLay) {
        return new extendedFABObject(btnName, icon, parentLay);
    },
    /*DONE*/
    addFilledButton: function (btnName, width, height, icon, parentLay) {
        return new filledButtonObject(btnName, width, height, icon, parentLay);
    },
    
    addFilledTonalButton: function (btnName, width, height, icon, parentLay) {
        return new filledTonalButtonObject(btnName, width, height, icon, parentLay);
    },
    
    addOutlinedButton: function (btnName, width, height, icon, parentLay) {
        return new outlinedButtonObject(btnName, width, height, icon, parentLay);
    },
    
    addTextButton: function (btnName, width, height, icon, parentLay) {
        return new textButtonObject(btnName, width, height, icon, parentLay);
    },
    
    
    addSmallFAB: function (icon, layout) {
        return new smallFABObject(icon, layout);
    },
    
    addFAB: function (icon, layout) {
        return new fabObject(icon, layout);
    },
    
    addLargeFAB: function (icon, layout) {
        return new largeFABObject(icon, layout);
    },
    
    addChip: function (type, text, icon, width, height, parentLay) {
        return new chipObject(type, text, icon, width, height, parentLay);
    },
    
    addIconButton: function (iconName, parentLay) {
        return new _iconButtonObject(iconName, parentLay)
    },
    
    
    
    addDrawer: function (drawerLayout, side, width, options) {
        return new navDrawerObject(drawerLayout, side, width, options);
    },
    
    
    addSecondaryTabs: function(listOfTabs,width, height, options, parentLay){
        return new secTabObject(listOfTabs,width, height, options, parentLay);
    },
    
    addNavigationBar: function(listOfTabs, labels, options, parentLay){
        return new navigationBarObject(listOfTabs, labels, options, parentLay);
    },
    
   
    addMenu: function (menuType, list, position) {
        return new menuObj(menuType, list, position);
    },
    
    addProgressBar: function (progressType, width, layout) {
        return new progressObject(progressType, width, layout);
    },
    addRadioButtons: function (list, width, height, layout) {
        return new radioListObject(list, width, height, layout);
    },
    addSeekBar: function (value, range, width, layout) {
        return new seekBarObject(value, range, width, layout);
    },
    
    showDialog : function(title, text, dlgOptions, noAction, yesAction) { 
        return new dlgBarObject(title, text, dlgOptions, noAction, yesAction); 
    },
    
    showEmptyDialog : function(dialogLayout, width, height, options){
        return new emptyDlgObject(dialogLayout, width, height, options);
    },
    
    addSnackBar: function (text, btnAction, width, alignment) {
        return new SnackBarObject(text, btnAction, width, alignment);
    },
    
    
    addSwitch: function (switchType, value, parent_Layout) {
        return new switchObject(switchType, value, parent_Layout);
    },
    
    addSwitchSettings: function(listOfSettings, switchValues, width, height, parentLay){
        return new 
        switchSettingsObject(listOfSettings, switchValues, width, height, parentLay);
    },
    
    
    
    addText: function(text, width, height, options, parentLay){
        return new textObject(text, width, height, options, parentLay)
    },
    
    addTextField: function (type, width, height, hint, options, labeled, parentLay) {
        return new inputObj(type, width, height, hint, options, labeled, parentLay);
    },
    
    
    
    addDatePicker: function (){
        
    },
    
    addTimeInput: function (hour, minute, options){
        return new timeInputObject(hour, minute, options);
    }
    
};


app.CreateMaterial3 = () => ui.InitializeUIKit();


const warnDeveloper = (context,shortContext) => {
    if(context || shortContext) {
        console.log(warningColor + context);
        app.ShowPopup(shortContext,'Top, Short');
    }
    
    else {
        alert('No Warning Context.');
    }
}


const dpToPxConversion = (dpValue) => {
    return dpValue * (app.GetScreenDensity() / 160);
}

const pxToDpConversion = (pxValue) => {
    return pxValue / (app.GetScreenDensity() / 160);
}

const dsUnitsToDp = function(dsUnit, side){
    if (side == 'width' || side == 'w'){
        let dWidth = pxToDpConversion(DW());
        return dsUnit * dWidth;
    }
    else {
        let dHeight =  pxToDpConversion(DH());
        return dsUnit * dHeight;
    }
}

const dpToDsUnit = function(dpValue, side){
    if (side == 'width' || side == 'w'){
        let dWidth = pxToDpConversion(DW());
        return dpValue/dWidth;
    }
    else {
        let dHeight =  pxToDpConversion(DH());
        return dpValue/dHeight;
    }
}

const stateColor = (lightValue, darkValue) => {
    /* At start theme is undefined.
       We make opportunity out of 
       bug/
       Default theme is always dark
       and can be changed w,
       setTheme method.
    */
    
    if (theme === 'light') {
        return lightValue;
    }
    
    else {
        return darkValue;
    }
}




function searchBarObject(leadingIcon, trailingIcon, hint, width, parentLayout){
    this.Animate = function(type, callback, time){
        _search.Animate(type, callback, time);
    }
    
    
    this.ClearFocus = function(){
        _searchInput.ClearFocus();
    }
    
    this.GetCursorLine = function(){
        return _searchInput.GetCursorLine();
    }
    
    this.GetCursorPos = function(){
        return _searchInput.GetCursorPos();
    }
    
    this.GetHtml = function(){
        return _searchInput.GetHtml();
    }
    
    this.GetSelectedText = function(){
        return _searchInput.GetSelectedText();
    }
    
    this.GetSelectionEnd = function(){
        return _searchInput.GetSelectionEnd();
    }
    
    this.GetSelectionStart = function(){
        return _searchInput.GetSelectionStart();
    }
    
    this.GetText = function(){
        _searchInput.GetText();
    }
    
    this.GetVisibility = function(){
        return _search.GetVisibility();
    }
    
    this.GetType = function(){
        return 'SearchBar';
    }
    
    this.Gone = function(){
        _search.Gone();
    }
    
    this.Hide = function(){
        _search.Hide();
    }
    
    this.InsertText = function(text, start){
        _searchInput.InsertItem(text, start);
    }
    
    this.IsOverlap = function(){
        return _search.IsOverlap();
    }
    
    this.SetEnabled = function(bool){
        _search.SetEnabled(bool);
    }
    
    this.SetHtml = function(html){
        _searchInput.SetHtml(html);
    }
    
    this.SetOnChange = function(onChange){
        _searchInput.SetOnChange(onChange)
    }
    
    this.SetOnEnter = function(onEnter){
        _searchInput.SetOnEnter(onEnter);
    }
    
    this.SetOnFocus = function(onFocus){
        _searchInput.SetOnFocus(onFocus);
    }
    
    this.SetOnTouch = function(onTouch){
        this.onTouch = onTouch;
    }
    
    this.SetText = function(text){
        _searchInput.SetText(text);
    }
    
    this.SetVisibility = function(mode){
        _search.SetVisibility(mode);
    }
    
    this.Show = function(){
        _search.Show();
    }
    
    this.Tween = function(target, duration, type, repeat, yoyo, callback){
        _search.Tween(target, duration, type, repeat, yoyo, callback);
    }
    
    this.SetMargins = function(left, top, right, bottom, mode){
        //.SetMargins(left, top, right, bottom, mode);
    }
    if (parentLayout){
        drawSearchBar(leadingIcon, trailingIcon, hint, width, parentLayout, this);
    }
    else warnDeveloper('You didnt add a parent to the search component',
    'Add parent To SearchBar');
}

function drawSearchBar(leadingIcon, trailingIcon, hint, width, parentLayout, searchObj) {
    const imageFileTypes = ['jpg','png','jpeg','ico','tiff']
    
    const searchBarType = (trailingIcon) => {
        if (trailingIcon.includes(',')) {
            const firstTrailingIcon = trailingIcon.split(',')[0];
            const secondTrailingIcon = trailingIcon.split(',')[1];
            
            if (imageFileTypes.includes(secondTrailingIcon)) {
                return {
                    firstTrailingIcon,
                    secondTrailingIcon,
                    barType: 'WithAvatar&Icon'
                };
            } else {
                return {
                    firstTrailingIcon,
                    secondTrailingIcon,
                    barType: 'WithTwoIcons'
                };
            }
        }else {
            /* If TrailingIcon doesn't have a comma test if it's either:
            WithAvatar
            WithIcon
            */
            
            if (imageFileTypes.includes(trailingIcon)) {
                return {
                    trailingIcon,
                    barType: 'WithAvatar'
                };
            }
            else {
                return {
                    barType: 'WithIcon'
                };
            }
        }
    }

    const searchType = searchBarType(trailingIcon); 

    switch (searchType.barType) {
        case 'WithIcon':
            drawSearchWithIcon();
            break;
        case 'WithAvatar':
            drawSearchWithAvatar();
            break;
        case 'WithTwoIcons':
            drawSearchWithTwoIcons(searchType.firstTrailingIcon, searchType.secondTrailingIcon);
            break;
        case 'WithAvatar&Icon':
            drawSearchWithAvatarIcon(searchType.firstTrailingIcon, searchType.secondTrailingIcon);
            break; 
    }
    
    
    function drawSearchWithIcon() {
        let _search, _searchContainer, _leadingIcon, _searchInput, _trailingIcon;
        
        let _iconRadius = 50/100 * 34;
        let _searchBarWidth = function(){
            if (dsUnitsToDp(width,'w') < 144){
                warnDeveloper(`SearchBar Width Cant Be Less Than \n
                0.4 dsUnits or 144 dp.\n
                So Have Been Set To 0.4 !`,'SearchBar Width Cant Be Less Than 0.4. Check Debug Log');
                return 144;
            }
            else {
                return dsUnitsToDp(width,'w');
            }
        }
        let _searchInputWidth = function(){
            return dsUnitsToDp(width,'w') - 128;
        }
        _search = app.AddLayout(parentLayout, 'Card');
        _search.SetCornerRadius(36)
        _search.SetSize(_searchBarWidth(), 56, 'dp')
        _search.SetBackColor(searchBarClr.value);
        
        _searchContainer = app.AddLayout(_search, 'Linear','Horizontal,Left')
        _leadingIcon = app.AddButton(_searchContainer, leadingIcon, null, null, 'Custom,Lego');
        _leadingIcon.SetSize(34, 34, 'dp');
        _leadingIcon.SetTextSize(24)
        _leadingIcon.SetTextColor(searchBarTextClr.value)
        _leadingIcon.SetStyle(searchBarIconClr.value,searchBarIconClr.value,_iconRadius,null,null,0);
        _leadingIcon.SetFontFile(defaultIcons)
        _leadingIcon.SetMargins(16,13,16,null,'dp')
        
        _searchInput = app.AddTextEdit(_searchContainer, '', null,null,'Singleline,Left')
        _searchInput.SetBackColor(searchBarClr.value)
        _searchInput.SetMargins(null,8,null,null,'dp')
        _searchInput.SetSize(_searchInputWidth(), -1, 'dp');
        _searchInput.SetTextColor(searchBarInputTextClr.value);
        
        
        
        if(hint !== null){
            _searchInput.SetHint(hint);
        }
        
        
        _trailingIcon = app.AddButton(_searchContainer, trailingIcon, null, null, 'Custom,Lego');
        _trailingIcon.SetSize(34, 34, 'dp');
        _trailingIcon.SetTextSize(24)
        _trailingIcon.SetTextColor(searchBarTextClr.value)
        _trailingIcon.SetStyle(searchBarIconClr.value,searchBarIconClr.value,_iconRadius,null,null,0);
        _trailingIcon.SetFontFile(defaultIcons)
        _trailingIcon.SetMargins(16,13,16,null,'dp')
        
        //SetOnTouch Implementation
        _leadingIcon.SetOnTouch(function(){
            if(searchObj.onTouch){
                M(this, searchObj.onTouch(leadingIcon))
        
            }
        });
        
        _trailingIcon.SetOnTouch(function(){
            if(searchObj.onTouch){
                M(this, searchObj.onTouch(trailingIcon))
            }
        });
        
        searchBarClr.subscribe((value)=>{
            _search.SetBackColor(value);
            _searchInput.SetBackColor(value)
        })
        
        searchBarIconClr.subscribe((value)=>{
            _leadingIcon.SetStyle(value,value,_iconRadius,null,null,0);
            _trailingIcon.SetStyle(value,value,_iconRadius,null,null,0);
        })
        
        searchBarTextClr.subscribe((value)=>{
            _leadingIcon.SetTextColor(value);
            _trailingIcon.SetTextColor(value)
        })
        
        searchBarInputTextClr.subscribe((value)=>{
            _searchInput.SetTextColor(value);
        })
        
    }
    
    function drawSearchWithAvatar() {
        let _search, _searchContainer, _leadingIcon, _searchInput, _trailingIcon, _trailingLay;
        
        let _iconRadius = 50/100 * 34;
        let _searchBarWidth = function(){
            if (dsUnitsToDp(width,'w') < 144){
                warnDeveloper(`SearchBar Width Cant Be Less Than \n
                0.4 dsUnits or 144 dp.\n
                So Have Been Set To 0.4 !`,'SearchBar Width Cant Be Less Than 0.4. Check Debug Log');
                return 144;
            }
            else {
                return dsUnitsToDp(width,'w');
            }
        }
        let _searchInputWidth = function(){
            return dsUnitsToDp(width,'w') - 128;
        }
        _search = app.AddLayout(parentLayout, 'Card');
        _search.SetCornerRadius(36)
        _search.SetSize(_searchBarWidth(), 56, 'dp')
        _search.SetBackColor(searchBarClr.value);
        
        _searchContainer = app.AddLayout(_search, 'Linear','Horizontal,Left')
        _leadingIcon = app.AddButton(_searchContainer, leadingIcon, null, null, 'Custom,Lego');
        _leadingIcon.SetSize(34, 34, 'dp');
        _leadingIcon.SetTextSize(24)
        _leadingIcon.SetTextColor(searchBarTextClr.value)
        _leadingIcon.SetStyle(searchBarIconClr.value,searchBarIconClr.value,_iconRadius,null,null,0);
        _leadingIcon.SetFontFile(defaultIcons)
        _leadingIcon.SetMargins(16,13,16,null,'dp')
        
        _searchInput = app.AddTextEdit(_searchContainer, '', null,null,'Singleline,Left')
        _searchInput.SetBackColor(searchBarClr.value)
        _searchInput.SetMargins(null,8,null,null,'dp')
        _searchInput.SetSize(_searchInputWidth(), -1, 'dp');
        _searchInput.SetTextColor(searchBarInputTextClr.value);
        
        if(hint !== null){
            _searchInput.SetHint(hint);
        }
        
        //Check If Image File Exists And If Not Dont Procced
        if (!app.FileExists(trailingIcon)){
            warnDeveloper(`The Avatar ${trailingIcon}, Does Not Exist`,'Search Avatar Not Found');
            return
        }
        
        else{
        _trailingLay = app.AddLayout(_searchContainer,'Card');
        _trailingLay.SetCornerRadius(15)
        _trailingIcon = app.AddImage(_trailingLay, trailingIcon, null, null,'async')
        _trailingIcon.SetSize(30, 30, 'dp');
        _trailingLay.SetMargins(16,13,16,null,'dp')
        }
        _leadingIcon.SetOnTouch(function(){
            if(searchObj.onTouch){
                M(this, searchObj.onTouch(leadingIcon))
                }
        });
        
        _trailingIcon.SetOnTouchDown(function(){
            if(searchObj.onTouch){
                M(this,searchObj.onTouch('avatar'))
            }
        });
        searchBarClr.subscribe((value)=>{
            _search.SetBackColor(value);
            _searchInput.SetBackColor(value)
        })
        
        searchBarIconClr.subscribe((value)=>{
            _leadingIcon.SetStyle(value,value,_iconRadius,null,null,0);
            _trailingIcon.SetStyle(value,value,_iconRadius,null,null,0);
        })
        
        searchBarTextClr.subscribe((value)=>{
            _leadingIcon.SetTextColor(value);
            _trailingIcon.SetTextColor(value)
        })
        
        searchBarInputTextClr.subscribe((value)=>{
            _searchInput.SetTextColor(value);
        })
    }
    
    function drawSearchWithTwoIcons(firstTrailingIcon, secondTrailingIcon) {
        let _search, _searchContainer, _leadingIcon, _searchInput, _firstTrailingIcon,
        _secondTrailingIcon;
        let _iconRadius = 50/100 * 34;
        let _searchBarWidth = function(){
            if (dsUnitsToDp(width,'w') < 144){
                warnDeveloper(`SearchBar Width Cant Be Less Than \n
                0.4 dsUnits or 144 dp.\n
                So Have Been Set To 0.4 !`,'SearchBar Width Cant Be Less Than 0.4. Check Debug Log');
                return 144;
            }
            else {
                return dsUnitsToDp(width,'w');
            }
        }
        let _searchInputWidth = function(){
            return dsUnitsToDp(width,'w') - 176;
        }
        
        _search = app.AddLayout(parentLayout, 'Card');
        _search.SetCornerRadius(36)
        _search.SetSize(_searchBarWidth(), 56, 'dp')
        _search.SetBackColor(searchBarClr.value);
        
        _searchContainer = app.AddLayout(_search, 'Linear','Horizontal,Left')
        _leadingIcon = app.AddButton(_searchContainer, leadingIcon, null, null, 'Custom,Lego');
        _leadingIcon.SetSize(34, 34, 'dp');
        _leadingIcon.SetTextSize(24)
        _leadingIcon.SetTextColor(searchBarTextClr.value)
        _leadingIcon.SetStyle(searchBarIconClr.value,searchBarIconClr.value,_iconRadius,null,null,0);
        _leadingIcon.SetFontFile(defaultIcons)
        _leadingIcon.SetMargins(16,13,16,null,'dp')
        
        _searchInput = app.AddTextEdit(_searchContainer, '', null,null,'Singleline,Left')
        _searchInput.SetBackColor(searchBarClr.value)
        _searchInput.SetMargins(null,8,null,null,'dp')
        _searchInput.SetSize(_searchInputWidth(), -1, 'dp');
        _searchInput.SetTextColor(searchBarInputTextClr.value);
        
        if(hint !== null){
            _searchInput.SetHint(hint);
        }
        
        
        _firstTrailingIcon = app.AddButton(_searchContainer, firstTrailingIcon, null, null, 'Custom,Lego');
        _firstTrailingIcon.SetSize(34, 34, 'dp');
        _firstTrailingIcon.SetTextSize(24)
        _firstTrailingIcon.SetTextColor(searchBarTextClr.value)
        _firstTrailingIcon.SetStyle(searchBarIconClr.value,searchBarIconClr.value,_iconRadius,null,null,0);
        _firstTrailingIcon.SetFontFile(defaultIcons)
        _firstTrailingIcon.SetMargins(16,13,8,null,'dp')
        
        _secondTrailingIcon = app.AddButton(_searchContainer, secondTrailingIcon, null, null, 'Custom,Lego');
        _secondTrailingIcon.SetSize(34, 34, 'dp');
        _secondTrailingIcon.SetTextSize(24)
        _secondTrailingIcon.SetTextColor(searchBarTextClr.value)
        _secondTrailingIcon.SetStyle(searchBarIconClr.value,searchBarIconClr.value,_iconRadius,null,null,0);
        _secondTrailingIcon.SetFontFile(defaultIcons)
        _secondTrailingIcon.SetMargins(null,13,16,null,'dp')
        
        //SetOnTouch Implementation
        _leadingIcon.SetOnTouch(function(){
            if(searchObj.onTouch){
                M(this,searchObj.onTouch(leadingIcon))
            }
        });
        
        _firstTrailingIcon.SetOnTouch(function(){
            if(searchObj.onTouch){
                M(this, searchObj.onTouch(firstTrailingIcon))
            }
        });
        
         _secondTrailingIcon.SetOnTouch(function(){
            if(searchObj.onTouch){
                M(this,searchObj.onTouch(secondTrailingIcon))
            }
        });
        
        searchBarClr.subscribe((value)=>{
            _search.SetBackColor(value);
            _searchInput.SetBackColor(value)
        })
        
        searchBarIconClr.subscribe((value)=>{
            _leadingIcon.SetStyle(value,value,_iconRadius,null,null,0);
            _firstTrailingIcon.SetStyle(value,value,_iconRadius,null,null,0);
            _secondTrailingIcon.SetStyle(value,value,_iconRadius,null,null,0);
        })
        
        searchBarTextClr.subscribe((value)=>{
            _leadingIcon.SetTextColor(value);
            _firstTrailingIcon.SetTextColor(value)
             _secondTrailingIcon.SetTextColor(value)
        })
        
        searchBarInputTextClr.subscribe((value)=>{
            _searchInput.SetTextColor(value);
        })
        
    }
    
    function drawSearchWithAvatarIcon(firstTrailingIcon, secondTrailingIcon) {
        
    
        let _iconRadius = 50/100 * 34;
        let _searchBarWidth = function(){
            if (dsUnitsToDp(width,'w') < 144){
                warnDeveloper(`SearchBar Width Cant Be Less Than \n
                0.4 dsUnits or 144 dp.\n
                So Have Been Set To 0.4 !`,'SearchBar Width Cant Be Less Than 0.4. Check Debug Log');
                return 144;
            }
            else {
                return dsUnitsToDp(width,'w');
            }
        }
        let _searchInputWidth = function(){
            return dsUnitsToDp(width,'w') - 178;
        }
        
        
        
        _search = app.AddLayout(parentLayout, 'Card');
        _search.SetCornerRadius(36)
        _search.SetSize(_searchBarWidth(), 56, 'dp')
        _search.SetBackColor(searchBarClr.value);
        
        _searchContainer = app.AddLayout(_search, 'Linear','Horizontal,Left')
        _leadingIcon = app.AddButton(_searchContainer, leadingIcon, null, null, 'Custom,Lego');
        _leadingIcon.SetSize(34, 34, 'dp');
        _leadingIcon.SetTextSize(24)
        _leadingIcon.SetTextColor(searchBarTextClr.value)
        _leadingIcon.SetStyle(searchBarIconClr.value,searchBarIconClr.value,_iconRadius,null,null,0);
        _leadingIcon.SetFontFile(defaultIcons)
        _leadingIcon.SetMargins(16,13,16,null,'dp')
        
        _searchInput = app.AddTextEdit(_searchContainer, '', null,null,'Singleline,Left')
        _searchInput.SetBackColor(searchBarClr.value)
        _searchInput.SetMargins(null,8,null,null,'dp')
        _searchInput.SetSize(_searchInputWidth(), -1, 'dp');
        _searchInput.SetTextColor(searchBarInputTextClr.value);
        
        if(hint !== null){
            _searchInput.SetHint(hint);
        }
        
        _trailingIcon = app.AddButton(_searchContainer, firstTrailingIcon, null, null, 'Custom,Lego');
        _trailingIcon.SetSize(34, 34, 'dp');
        _trailingIcon.SetTextSize(24)
        _trailingIcon.SetTextColor(searchBarTextClr.value)
        _trailingIcon.SetStyle(searchBarIconClr.value,searchBarIconClr.value,_iconRadius,null,null,0);
        _trailingIcon.SetFontFile(defaultIcons)
        _trailingIcon.SetMargins(16,13,8,null,'dp')
        
        _avatarLay = app.AddLayout(_searchContainer,'Card');
        _avatarLay.SetCornerRadius(15)
        _avatarIcon = app.AddImage(_avatarLay, secondTrailingIcon, null, null,'async')
        _avatarIcon.SetSize(30, 30, 'dp');
        _avatarLay.SetMargins(0,13,16,null,'dp')
        
        //SetOnTouch Implementation
        _leadingIcon.SetOnTouch(function(){
            if(searchObj.onTouch){
                M(this, searchObj.onTouch(leadingIcon))
                //searchObj.onTouch(leadingIcon);
            }
        });
        
        _trailingIcon.SetOnTouch(function(){
            if(searchObj.onTouch){
                M(this, searchObj.onTouch(firstTrailingIcon))
                //searchObj.onTouch(firstTrailingIcon);
            }
        });
        
        
        _avatarIcon.SetOnTouchDown(function(){
            if(searchObj.onTouch){
                M(this,searchObj.onTouch('avatar'))
                //searchObj.onTouch('avatar');
            }
        });
    searchBarClr.subscribe((value)=>{
            _search.SetBackColor(value);
            _searchInput.SetBackColor(value)
        })
        
        searchBarIconClr.subscribe((value)=>{
            _leadingIcon.SetStyle(value,value,_iconRadius,null,null,0);
            _firstTrailingIcon.SetStyle(value,value,_iconRadius,null,null,0);
            _secondTrailingIcon.SetStyle(value,value,_iconRadius,null,null,0);
        })
        
        searchBarTextClr.subscribe((value)=>{
            _leadingIcon.SetTextColor(value);
            _firstTrailingIcon.SetTextColor(value)
             _secondTrailingIcon.SetStyle(value,value,_iconRadius,null,null,0);
        })
        
        searchBarInputTextClr.subscribe((value)=>{
            _searchInput.SetTextColor(value);
        })
    }
    
    
}


function bottomBarObject(barPropsInjson, parentLay) {
    let bottomBarContainer;
    
    this.SetOnTouch = function (onTouchFunc) {
        this.onTouchFunc = onTouchFunc;
    }
    
    this.SetRawAdjustment = function (distanceFromTop) {
        bottomBarContainer.SetMargins(0, distanceFromTop);
    }
    
    if (unpositionalLayout.includes(layoutType)) {
        warnDeveloper('BottomAppBar Cannot Be Set On A Linear Layout',
        'Change To Absolute Layout');
        return;
    }
    else {
        bottomBarContainer = drawBottomBar(barPropsInjson, parentLay, this);
    }
}

function drawBottomBar(barPropsInjson, parentLay, bottomBarObj) {
    let bottomBarContainer;
    let props = JSON.stringify(barPropsInjson);
    let info = JSON.parse(props);
    let icon1 = info.firstIcon;
    let icon2 = info.secondIcon;
    let icon3 = info.thirdIcon;
    let icon4 = info.fourthIcon;
    let fabIcon = info.fabIcon;
    
    bottomBarContainer = app.CreateLayout("Card", "Horizontal,Bottom,FillXY");
    bottomBarContainer.SetSize(pxToDpConversion(DW()), 80, 'dp');
    bottomBarContainer.SetElevation(3, 'dp');
    bottomBarContainer.SetPosition(0, 0.9);
    
    const box = app.CreateLayout('Linear', 'Horizontal');
    bottomBarContainer.AddChild(box);
    box.SetSize(-1, 80, 'dp');
    
    const _icon1 = app.CreateText(icon1, null, null, 'H/VCenter,FillXY');
    _icon1.SetFontFile(defaultIcons);
    _icon1.SetTextSize(24);
    _icon1.SetOnTouchUp(function () {
        if (bottomBarObj.onTouchFunc){
            bottomBarObj.onTouchFunc(icon1);
        }
    });
    
    _icon1.SetMargins(8, null, 16, null, 'dp');
    
    const _icon2 = app.CreateText(icon2, null, null, 'H/VCenter,FillXY');
    _icon2.SetFontFile(defaultIcons);
    _icon2.SetTextSize(24);
    _icon2.SetOnTouchUp(function () {
        if (bottomBarObj.onTouchFunc){
        bottomBarObj.onTouchFunc(icon2);
        }
    });
    _icon2.SetMargins(8, null, 16, null, 'dp');
    
    const _icon3 = app.CreateText(icon3, null, null, 'H/VCenter,FillXY');
    _icon3.SetFontFile(defaultIcons);
    _icon3.SetTextSize(24);
    _icon3.SetOnTouchUp(function () {
        if (bottomBarObj.onTouchFunc){
        bottomBarObj.onTouchFunc(icon3);
        }
    });
    _icon3.SetMargins(8, null, 16, null, 'dp');
    
    const _icon4 = app.CreateText(icon4, null, null, 'H/Vcenter,FillXY');
    _icon4.SetFontFile(defaultIcons);
    _icon4.SetTextSize(24);
    _icon4.SetOnTouchUp(function () {
        if (bottomBarObj.onTouchFunc){
        bottomBarObj.onTouchFunc(icon4);
        }
    });
    _icon4.SetMargins(8, null, 16, null, 'dp');
    
    const fab = app.CreateLayout('Card', 'Right,FillXY');
    fab.SetSize(56, 56, 'dp');
    fab.SetElevation(0);
    fab.SetCornerRadius(16);
    fab.SetMargins(96, 12, 16, 12, 'dp');
    
    const _fabIcon = app.CreateText(fabIcon, null, null, 'H/VCenter,FillXY');
    _fabIcon.SetFontFile(defaultIcons);
    _fabIcon.SetOnTouchDown(function () {
        if (bottomBarObj.onTouchFunc){
        bottomBarObj.onTouchFunc(fabIcon);
        }
    });
    
    _fabIcon.SetTextSize(24);
    fab.AddChild(_fabIcon);
    
    box.AddChild(_icon1);
    box.AddChild(_icon2);
    box.AddChild(_icon3);
    box.AddChild(_icon4);
    box.AddChild(fab);
    
    bottomBarContainer.SetBackColor(bottomBarAppClr.value);
    _icon1.SetTextColor(bottomBarAppTxtClr.value);
    _icon2.SetTextColor(bottomBarAppTxtClr.value);
    _icon3.SetTextColor(bottomBarAppTxtClr.value);
    _icon4.SetTextColor(bottomBarAppTxtClr.value);
    _fabIcon.SetTextColor(bottomBarAppTxtClr.value);
    fab.SetBackColor(bottomAppBarFAB.value);
    
    bottomBarAppClr.subscribe((value)=>{
        bottomBarContainer.SetBackColor(value)
    })
    
    bottomAppBarFAB.subscribe((value)=>{
        fab.SetBackColor(value)
    })
    bottomBarAppTxtClr.subscribe((value)=>{
        _icon1.SetTextColor(value);
        _icon2.SetTextColor(value);
        _icon3.SetTextColor(value);
        _icon4.SetTextColor(value);
        _fabIcon.SetTextColor(bottomBarAppTxtClr.value);
    })
    parentLay.AddChild(bottomBarContainer);
    return bottomBarContainer;
}


function timeInputObject(hour, minute, options){
    let _timeInput;
    
    _timeInput = drawTimeInput(hour, minute, options);
}

function drawTimeInput(hour, minute, options){
    let __timeInput,__container,__subContainer;
    
    let textColor = stateColor(md_theme_light_onSurfaceVariant,
    md_theme_dark_onSurfaceVariant);
    
    let containeClr = stateColor(md_theme_light_surface,
    md_theme_dark_surface);
    
    let hrcolor = stateColor(md_theme_light_primary,
    md_theme_dark_primary);
    
    let hrBorderClr = stateColor(md_theme_light_onSurfaceVariant,
    md_theme_dark_onSurfaceVariant)
    let width = function () {
        if (app.IsTablet()) return 560;
        else return 280;
    }
    
    let margin = dpToPxConversion(24)
    __timeInput = app.CreateDialog();
    __timeInput.SetBackColor("#00000000");
    
    __container = app.CreateLayout('Card');
    __container.SetCornerRadius(28);
    __container.SetElevation(0);
    __container.SetSize(width(), -1, 'dp');
    __container.SetBackColor(containeClr);
    
    __subContainer = app.AddLayout(__container, 'Absolute')
    

    __enterTime = app.AddText(__subContainer, 'Enter time', -1, -1, 'Bold');
    __enterTime.SetTextColor(textColor)
    __enterTime.SetPosition(dpToPxConversion(24),
    dpToPxConversion(24),null,null,'px');
    
    __hrContainer = app.AddButton(__subContainer,'',null,null,'Custom');
    __hrContainer.SetSize(96,80,'dp')
    __hrContainer.SetPosition(dpToPxConversion(24),
    dpToPxConversion(62),null,null,'px');
    
    __hrContainer.SetStyle("#00000000","#00000000",14,hrBorderClr,2,0);
    
    __minContainer = app.AddButton(__subContainer,'',null,null,'Custom');
    __minContainer.SetSize(96,80,'dp')
    __minContainer.SetPosition(dpToPxConversion(134),
    dpToPxConversion(62),null,null,'px');
    
    __minContainer.SetStyle("#00000000","#00000000",14,hrBorderClr,2,0);
    
    __timeInput.AddLayout(__container);
    __timeInput.Show();
    return __timeInput;
}

function switchSettingsObject(listOfSettings, switchValues, width, height, parentLay){
    let _SwitchSettings;
    if(!parentLay){
        warnDeveloper('No Parent To Swicth Settings.')
    }
    else _SwitchSettings = drawSwitchSettings(listOfSettings, switchValues, width, height, parentLay);
}

function drawSwitchSettings(listOfSettings, switchValues, width, height, parentLay){
    
    /* Get No Of Switch Settings */
    if(!listOfSettings.includes(',')){
        warnDeveloper('It seems like you didnt give a list.');
        return;
    }
    
    noOfSettings = listOfSettings.split(',').length;
    
    __SwicthListContainer = app.AddLayout(parentLay,'Linear','Vertical')
    __SwicthListContainer.SetSize(width,height);
    
    
    /* Create A Template For A Single Setting */
    
    let __SwitchTemplate = function (headerValue, descriptionValue, boolSwitchValue){
        __layout = ui.createLayout('Linear','Left,Horizontal',-1,-1,__SwicthListContainer)
        __layout.SetSize(dsUnitsToDp(width,'w'),64,'dp');
        __layout.SetMargins(null, 0.01)
        
        if(descriptionValue){
            __headerText = app.AddText(__layout,null,0.6,-1,'Left,Multiline')
            __headerText.SetHtml(`<b>${headerValue}</b><br>${descriptionValue}`)
            __headerText.SetEllipsize( "end" );
            __headerText.SetMargins(8,4,null,null,'dp');
            __headerText.SetTextColor(stateColor(md_theme_light_onSurface,md_theme_dark_onSurface))
            __headerText.SetFontFile(boldFont)
            __headerText.SetTextSize(15)
        }
        else {
        __headerText = app.AddText(__layout, headerValue,0.6,-1,'Left,Bold')
        __headerText.SetMargins(8,4,null,null,'dp');
        __headerText.SetEllipsize( "end" );
        __headerText.SetFontFile(boldFont)
        __headerText.SetTextColor(stateColor(md_theme_light_onSurface,md_theme_dark_onSurface))
        __headerText.SetTextSize(15)
        }
        
        __switch = ui.addSwitch('noIcon',true,__layout);
        __switch.SetMargins(dsUnitsToDp(width,'w') - dsUnitsToDp(0.7,'w')-42,8,12,8,'dp')
        /* TODO */
        
    }
    
    
    /* Get Any Description Values */
    
    for (let i = 0; i < noOfSettings; i++){
        if (listOfSettings.split(',')[i].includes('[')){
            
            posOfBracket = listOfSettings.split(',')[i].indexOf('[');
            posOfLastBracket = listOfSettings.split(',')[i].indexOf(']');
            
            headerValue = listOfSettings.split(',')[i].slice(0, posOfBracket).trim()
            
            descriptionValue = listOfSettings.split(',')[i].substring(posOfBracket +1,posOfLastBracket)
        
            __SwitchTemplate(headerValue,descriptionValue)
        }
        
        else {
            headerValue = listOfSettings.split(',')[i].trim()
            
            __SwitchTemplate(headerValue,null)
        }
    }
}


function centerAlignedAppBarObj(title, leadingIcon, controlIcons, parentLay) {
    let barCardLay;
    
    this.SetOnTouch = function (onTouch) {
        this.onTouch = onTouch
    }
    
    if(!parentLay){
        warnDeveloper('No Parent For App Bar.')
    }
    else{
        barCardLay = drawAppBar(title, leadingIcon, controlIcons, parentLay,this)
    }
}

function drawAppBar(title, leadingIcon, controlIcons, parentLay, appBarObj) {
    barCardLay = app.AddLayout(parentLay, "Card");
    barCardLay.SetSize(DW(), dpToPxConversion(64), 'px');
    
    barCardLay.SetBackColor(appBarColor.value)
    barCardLay.SetMargins(0, 0)
    
    
    barUi = app.CreateLayout('Linear', 'Horizontal,Left');
    barCardLay.AddChild(barUi);
    
    
    _IconRadius = 50/100 * 120;
    
    _leftIcon = app.AddButton(barUi, leadingIcon, null, null, 'Custom, Lego');
    _leftIcon.SetSize(144, 144, 'px');
    _leftIcon.SetStyle(appBarIconColor.value,appBarIconColor.value, _IconRadius, null,null, 0)
    _leftIcon.SetMargins(48, 24,  pxToDpConversion(DW()) - 190, null, 'px')
    
    _leftIcon.SetFontFile(defaultIcons)
    _leftIcon.SetTextSize(72, 'px');
    _leftIcon.SetTextColor(appBarTextsClr.value )
    _leftIcon.SetOnTouch(function () {
        if (appBarObj.onTouch) {
            M(this,appBarObj.onTouch(leadingIcon));
        }
    })
    
    _title = app.AddText(barUi, title, -1, -1, 'Wrap');
    _title.SetMargins(null, 24, null, 24, 'px')

    _title.SetTextSize(28, 'dp');
    _title.SetTextColor(appBarTextsClr.value)
    
    
    
    _rightIcon = app.AddButton(barUi, controlIcons, null, null, 'Custom, Lego');
    _rightIcon.SetMargins(pxToDpConversion(DW()) - 190, 24, 30, null, 'px')
    _rightIcon.SetStyle(appBarIconColor.value,appBarIconColor.value, _IconRadius, null,null, 0)
    _rightIcon.SetSize(144, 144, 'px');
    _rightIcon.SetTextSize(72, 'px');
    
    _rightIcon.SetFontFile(defaultIcons)
    _rightIcon.SetTextColor(appBarTextsClr.value )
    _rightIcon.SetOnTouch(function () {
        if (appBarObj.onTouch) {
            M(this,appBarObj.onTouch(controlIcons))
        }
    })
    
    appBarColor.subscribe((value)=>{
        barCardLay.SetBackColor(value)
    })
    
    appBarIconColor.subscribe((value)=>{
        _leftIcon.SetStyle(value,value, _IconRadius, null,null, 0)
        _rightIcon.SetStyle(value,value, _IconRadius, null,null, 0)
    })
    
    appBarTextsClr.subscribe((value)=>{
        _title.SetTextColor(value);
        _leftIcon.SetTextColor(value )
        _rightIcon.SetTextColor(value )
    })
    return barCardLay;
}



function navigationBarObject(listOfTabs, labels, options, parentLay){
    let __bottomNav;
    
    if (!parentLay){
        warnDeveloper('No Parent For Bottom Nav.');
        return;
    }
    else __bottomNav = drawNavigationBar(listOfTabs, labels, options, parentLay);
}

function drawNavigationBar(listOfTabs, labels, options, parentLay){
    
    let __bottomNav;
    let __bottomMain,__bottomBar,__labelLayout;
    
    
    
    let __firstBar,__secondBar,__thirdBar,__fourthBar;
    let __firstLabel,__secondLabel,__thirdLabel,__fourthLabel;
    
    let __tabCount = listOfTabs.split(',').length;
    let __labelCount = labels.split(',').length;
    
    const getTabNames = () => {
        if (!listOfTabs.includes(',') && __tabCount < 3) {
            warnDeveloper('Navigation Tabs Must Be 3 Or Exceed It.')
            return;
        } 
        
        else {
            __firstIconName = listOfTabs.split(',')[0]
            __secondIconName = listOfTabs.split(',')[1]
            __thirdIconName = listOfTabs.split(',')[2]
            __fourthIconName = listOfTabs.split(',')[3]

            return {
                __firstIconName,
                __secondIconName,
                __thirdIconName,
                __fourthIconName
            }
        }
    }
    
    const getTabLabels = () =>{
        if(!labels.includes(',') && __labelCount <3 ){
            warnDeveloper('Navigation Labels Must Be 3 Or Exceed It.')
            return;
        }
        
        else {
            __firstLabel = labels.split(',')[0];
            __secondLabel = labels.split(',')[1]
            __thirdLabel = labels.split(',')[2]
            __fourthLabel = labels.split(',')[3]
            
            return {
                __firstLabel,
                __secondLabel,
                __thirdLabel,
                __fourthLabel
            }
        }
    }
    
    __bottomMain = app.AddLayout(parentLay,'Linear','Vertical,Bottom');
    __bottomMain.SetSize(DW(),DH(),'px');
    
    __bottomBar = app.AddLayout(__bottomMain, 'Linear','Horizontal');
    __bottomBar.SetSize(pxToDpConversion(DW()), 44, 'dp')
    __bottomBar.SetBackColor(bottomBarClr);
    
    __labelLayout = app.AddLayout(__bottomMain, 'Linear','Horizontal,Left')
    __labelLayout.SetSize(pxToDpConversion(DW()), 36, 'dp')
    __labelLayout.SetBackColor(bottomBarClr);
    
    drawNavBar(getTabNames(), getTabLabels(), options, __bottomBar);
    
    __firstIconLabel = app.AddText(__labelLayout,__firstLabel, -1,-1)
    __firstIconLabel.SetMargins(37,4,16,0,'dp')
    __firstIconLabel.SetTextSize(14,'sp')
    
    
    
    __secondIconLabel = app.AddText(__labelLayout,__secondLabel )
    __secondIconLabel.SetMargins(52,4,16,0,'dp')
    
    __thirdIconLabel = app.AddText(__labelLayout,__thirdLabel )
    __thirdIconLabel.SetMargins(48,0,16,0,'dp')  
    
    bottomBarClr.value = stateColor(md_theme_light_inverseOnSurface,
    md_theme_dark_inverseOnSurface);
    return __bottomNav;
}

function drawNavBar(sortedTabNames, sortedLabels, options, parentLay){
    
    let __activeTab;
    let clearClr = "#00000000";    
    
    activeShade.subscribe((value)=>{
        icons[index].SetBackColor(value);
    })
    const setActiveTab = (index) =>{
        const icons = [__firstIcon, __secondIcon, __thirdIcon];
        
        icons[index].SetBackColor(activeShade.value);
        __activeTab = index;   
    }    
    
    if(!__fourthIconName){
    
    __firstIcon = app.AddButton(parentLay,__firstIconName, null, null,'Custom');
    __firstIcon.SetStyle(clearClr, clearClr, 16,null,null,0)
    __firstIcon.SetMargins(16,12,16,0,'dp')
    __firstIcon.SetFontFile(defaultIcons)
    __firstIcon.SetSize(64,32,'dp');
    __firstIcon.SetBackColor('blue')
    __firstIcon.SetTextSize(24,'dp')
   
    __secondIcon = app.AddButton(parentLay,__secondIconName, null, null,'Custom');
    __secondIcon.SetStyle(clearClr, clearClr, 16,null,null,0)
    __secondIcon.SetMargins(52,12,16,0,'dp')
    __secondIcon.SetFontFile(defaultIcons)
    __secondIcon.SetSize(64,32,'dp');
    __secondIcon.SetTextSize(24,'dp')
    
    
    __thirdIcon = app.AddButton(parentLay,__thirdIconName, null, null,'Custom');
    __thirdIcon.SetStyle(clearClr, clearClr, 16,null,null,0)
    __thirdIcon.SetMargins(48,12,16,0,'dp')
    __thirdIcon.SetFontFile(defaultIcons)
    __thirdIcon.SetSize(64,32,'dp');
    __thirdIcon.SetTextSize(24,'dp')
   
    }
    
    else {
        
    }
    
    activeShade.value = stateColor(md_theme_light_secondaryContainer,
    md_theme_dark_secondaryContainer)
    
    setActiveTab(0);
    
}
function secTabObject(listOfTabs, width, height, options, parentLay) {
    let _secondaryTab;
    
    this.SetMargins = function(left,top,right,bottom,mode){
        _secondaryTab.SetMargins(left,top,right,bottom,mode)
    }
    this.SetPosition = function(left, top, width, height, options){
        _secondaryTab.SetPosition(left, top, width, height, options);
    }
    
    this.Gone = function(){
        _secondaryTab.Gone();
    }
    
    this.SetVisibility = function(mode){
        _secondaryTab.SetVisibility(mode)
    }
    if (!parentLay) {
        warnDeveloper('No Parent To Tab', 'No Parent To Tab');
    } 
    else {
        _secondaryTab = drawSecondaryTabs(listOfTabs, width, height, options, parentLay);
    }
}

function drawSecondaryTabs(listOfTabs, width, height, options, parentLay){
    let __activeTab;
    
    let qaudTween = 'Quadratic.In';
    let linTween = 'Linear.None'
    let __tabCount = listOfTabs.split(',').length;
    
    const noOfTabs = (listOfTabs) =>{
        if(__tabCount >= 1 && __tabCount <= 3){
           __firstTab = listOfTabs.split(',')[0];
           __secondTab = listOfTabs.split(',')[1], 
           __thirdTab = listOfTabs.split(',')[2]
        }
        else {
            warnDeveloper(`You must have 2 or more tabs`);
            return;
        }
    }
    
    noOfTabs(listOfTabs);
    
    let __secondaryMain = app.AddLayout(parentLay, 'Linear','Vertical')
    __secondaryMain.SetSize(width, height);
    
    let __secondaryTab = app.AddLayout(__secondaryMain, 'Card','Vertical');
    __secondaryTab.SetMargins(0,0,0,null);
    __secondaryTab.SetSize(pxToDpConversion(DW()), 48, 'dp');
    __secondaryTab.SetBackColor(secondaryTabClr.value);
    
    let __secTabInnerTab = app.AddLayout(__secondaryTab, 'Absolute','Vertical,Left')
    __secTabInnerTab.SetSize(pxToDpConversion(DW()), 48, 'dp');
    //__secTabInnerTab.SetBackColor(secondaryTabClr.value);
    
    __secTabInnerLay = app.AddLayout(__secTabInnerTab, 'Linear','Horizontal');
    __secTabInnerLay.SetSize(pxToDpConversion(DW()), 46, 'dp');
    //__secTabInnerLay.SetBackColor(secondaryTabClr.value);
    
    // By default active tab is the first
    
    if (__tabCount == 2){
        if(!__activeTab) {
            __firstTabActive = true;
        }
        
        let __firstTabBtn = app.AddButton(__secTabInnerLay, __firstTab,null,null, 'NoPad');
        __firstTabBtn.SetTextColor(secondaryTabTxtClr.value)
        __firstTabBtn.SetBackColor(secondaryTabClr.value)
        __firstTabBtn.SetSize(pxToDpConversion(DW())/2,46,'dp')
        __firstTabBtn.SetMargins(0,0,0)
        
        __secondTabBtn = app.AddButton(__secTabInnerLay, __secondTab, 0.5, -1, 'NoPad');
        __secondTabBtn.SetTextColor(secondaryTabTxtClr.value)
        __secondTabBtn.SetBackColor(secondaryTabClr.value)
        __secondTabBtn.SetSize(pxToDpConversion(DW())/2,46,'dp')
        
        lightStrip = app.AddText(__secTabInnerTab,'',null, null,'Wrap')
        lightStrip.SetSize(pxToDpConversion(DW())/2,2,'dp')
        lightStrip.SetBackColor(lightBarClr.value) 
        
        
        const tweenValues = ()=>{
            if(__firstTabActive) return { x: 0.0, y: dpToDsUnit(46) };
            else return { x: 0.5, y: dpToDsUnit(46) };
        }
        
        const lightStripPower = (x) =>{
            /* If We Booted It Shouldnt AppparentLay An Animation */
            
            if(x) lightStrip.SetPosition(0,dpToDsUnit(46),null,null);
            else{
                if(__firstTabActive === true && x === undefined) lightStrip.Tween(tweenValues() ,250,linTween,false,null) 
                else lightStrip.Tween(tweenValues() ,350,qaudTween,false,null) 
            }
        }
        
        lightStripPower(true);
        
        __firstTabBtn.SetOnTouch(()=>{
            if(!__firstTabActive) {
                __firstTabActive = true;
                lightStripPower();
                activeTabLayoutSwitch();
            }
        });
        
        __secondTabBtn.SetOnTouch(()=>{
            if(__firstTabActive) {
                __firstTabActive = false;
                lightStripPower();
                activeTabLayoutSwitch();
            }
        })
        
        /* Add Tab Specific Layouts */
        
        __secondaryLayJacket = app.AddLayout(__secondaryMain, 'Frame', 'Horizontal')
        
        __firstTabLay = ui.createLayout(layoutType, options, width, 
        height - dpToDsUnit(48,'h'), __secondaryLayJacket)
        
        __secondTabLay = ui.createLayout(layoutType, options, width,
        height - dpToDsUnit(48,'h'), __secondaryLayJacket)
        
        
        /* If firstTabActive first layout shows and vice versa */
        
        const activeTabLayoutSwitch = (x) =>{
            if (x) __firstTabLay.Show() || __secondTabLay.Hide();
            else{
            if (__firstTabActive === true && x === undefined){
                __firstTabLay.Animate('SlideFromLeft',null,350) || __secondTabLay.Hide();
            }
            else {
                __firstTabLay.Hide() || __secondTabLay.Animate('SlideFromRight',null,350);
                }
            }
        }
        
        activeTabLayoutSwitch(true);
        
        secTabObject.prototype.SetActiveTab = function(index){
            setTab(index);
        }
        
        const setTab = (index)=>{
            if(__firstTabActive && index == 0) return;
            if(index == 0){
                __firstTabActive = true
                __secondTabLay.Hide() || __firstTabLay.Animate('SlideFromLeft',null,350) 
            }
            if(index == 1){
                 __firstTabActive = false
                __firstTabLay.Hide() || __secondTabLay.Animate('SlideFromLeft',null,350)
            }
            lightStripPower();
        }
        secondaryTabClr.subscribe((value)=>{
        __secTabInnerLay.SetBackColor(value);
        __firstTabBtn.SetBackColor(value)
        __secondTabBtn.SetBackColor(value)
    }) 
    
    }
    
    else {
        /* We use an almost ternary system */
        if(!__activeTab) {
            __firstTabActive = 0;
        }
        
        __firstTabBtn = app.AddButton(__secTabInnerLay, __firstTab,null,null, 'Custom,NoPad');
        __firstTabBtn.SetTextColor(secondaryTabTxtClr.value)
        __firstTabBtn.SetStyle(secondaryTabClr.value,secondaryTabClr.value,0,null,null,0)
        __firstTabBtn.SetSize(pxToDpConversion(DW())/3,46,'dp')
        __firstTabBtn.SetMargins(0,0,0)
        
        __secondTabBtn = app.AddButton(__secTabInnerLay, __secondTab, null, null, 'Custom,NoPad');
        __secondTabBtn.SetTextColor(secondaryTabTxtClr.value)
        __secondTabBtn.SetStyle(secondaryTabClr.value,secondaryTabClr.value,0,null,null,0)
        __secondTabBtn.SetSize(pxToDpConversion(DW())/3,46,'dp')
        
        __thirdTabBtn = app.AddButton(__secTabInnerLay, __thirdTab, null, null, 'Custom,NoPad');
        __thirdTabBtn.SetTextColor(secondaryTabTxtClr.value)
        __thirdTabBtn.SetStyle(secondaryTabClr.value,secondaryTabClr.value,0,null,null,0)
        __thirdTabBtn.SetSize(pxToDpConversion(DW())/3,46,'dp')
        
        lightStrip = app.AddText(__secTabInnerTab,'',null, null,'')
        lightStrip.SetSize(pxToDpConversion(DW())/3,2,'dp')
        lightStrip.SetBackColor(lightBarClr.value) 
        
        
        const tweenValues = ()=>{
            if(__firstTabActive == 0) return { x: 0.0, y: dpToDsUnit(46) };
            if (__firstTabActive == 1) return { x: 0.33, y: dpToDsUnit(46) };
            else return { x: 0.7, y: dpToDsUnit(46) };
        }
        
        const lightStripPower = (x) =>{
            
            /* If We Booted It Shouldnt Apply An Animation */
            //'Quadratic.In'
            if(x) lightStrip.SetPosition(0,dpToDsUnit(46),null,null);
            
            else{
                if(__firstTabActive === 0 && x === undefined){
                    lightStrip.Tween(tweenValues() ,250,qaudTween,false,null);
                }
                if(__firstTabActive === 1) {
                    lightStrip.Tween(tweenValues() ,250,linTween,false,null);
                }
                
                else lightStrip.Tween(tweenValues() ,250,qaudTween,false,null);
            }
        }
        
        lightStripPower(true);
        
        __firstTabBtn.SetOnTouch(()=>{
            __firstTabActive = 0;
            lightStripPower();
            activeTabLayoutSwitch();
        });
        
        __secondTabBtn.SetOnTouch(()=>{
            
            __firstTabActive = 1;
            lightStripPower();
            activeTabLayoutSwitch();
        })
        
        __thirdTabBtn.SetOnTouch(()=>{
            __firstTabActive = 2;
            lightStripPower();
            activeTabLayoutSwitch();
        })
        
        /* Add Tab Specific Layouts */
        
        __secondaryLayJacket = app.AddLayout(__secondaryMain, 'Frame', 'Horizontal')
        
        __firstTabLay = ui.createLayout(layoutType, options, width, 
        height - dpToDsUnit(48,'h'), __secondaryLayJacket)
        
        __secondTabLay = ui.createLayout(layoutType, options, width,
        height - dpToDsUnit(48,'h'), __secondaryLayJacket)
        
        __thirdTabLay = ui.createLayout(layoutType, options, width,
        height - dpToDsUnit(48,'h'), __secondaryLayJacket)
        
        /* If firstTabActive first layout shows and vice versa */
        
        /* All Layouts must be hidden before animating */
        
        const activeTabLayoutSwitch = (x) =>{
            
            if (x){
                __firstTabLay.Show()
                __secondTabLay.Hide()
                __thirdTabLay.Hide();
            }
            
            else{
                
            if (__firstTabActive === 0 && x === undefined){
                __secondTabLay.Hide()
                __thirdTabLay.Hide() 
                __firstTabLay.Animate('SlideFromLeft',null,350) 
            }
            
            if(__firstTabActive === 1){
               __firstTabLay.Hide()
               __thirdTabLay.Hide()
               __secondTabLay.Animate('SlideFromLeft',null,350)
            }
            
            if(__firstTabActive === 2){
                __firstTabLay.Hide()
                __secondTabLay.Hide()
                __thirdTabLay.Animate('SlideFromRight',null,350);
            }
            }
        }
        
        activeTabLayoutSwitch(true);  
        
       
        
        secTabObject.prototype.SetActiveTab = function(index){
            setTab(index);
        }
        
        const setTab = (index)=>{
            if(index === __firstTabActive) return;
            if(index == 0){
                __firstTabActive = 0
                __secondTabLay.Hide()
                __thirdTabLay.Hide()
                __firstTabLay.Animate('SlideFromLeft',null,350) 
            }
            
            if(index == 1){
                 __firstTabActive = 1
                __firstTabLay.Hide()
                __thirdTabLay.Hide()
                __secondTabLay.Animate('SlideFromLeft',null,350)
            }
            
            if(index == 2){
                 __firstTabActive = 2
                __firstTabLay.Hide()
                __secondTabLay.Hide()
                __thirdTabLay.Animate('SlideFromRight',null,350);
            }
            
            lightStripPower();
        }
    }
    
    
    
    secTabObject.prototype.GetTabLayout = function(tab){
        if (tab == __firstTab) return __firstTabLay;
        if (tab == __secondTab) return __secondTabLay;
        if (tab == __thirdTab) return __thirdTabLay;
    }
    
       
    lightBarClr.subscribe((value)=>{
        lightStrip.SetBackColor(value) 
    })
    secondaryTabTxtClr.subscribe((value)=>{
        __secondTabBtn.SetTextColor(value)
    })
    
    return __secondaryTab;
}




function textObject(text, width, height, options, parentLay){
    
    let _text;
    this.Animate = function(type,callback, time){
        _text.Animate(type,callback, time);
    }
    
    this.Batch = function (props) {
        _text.Batch(props);
    }
    
    this.ClearFocus = function(){
        _text.ClearFocus();
    }
    this.Focus = function(){
        _text.Focus();
    }
    
    this.GetHtml = function(){
        return _text.GetHtml();
    }
    
    this.GetLineCount = function(){
        return _text.GetLineCount();
    }
    
    this.GetLineStart = function (line){
        return _text.GetLineStart(line);
    }
    
    this.GetLineTop = function(line){
        return _text.GetLineTop(line);
    }
    
    this.GetMaxLines = function(){
        return _text.GetMaxLines();
    }
    
    this.GetText = function(){
        return _text.GetText();
    }
    
    this.GetTextSize = function(mode){
        return _text.GetTextSize(mode);
    }
    
    this.GetTop = function(){
        return _text.GetTop();
    }
    
    this.GetVisibility = function(){
        return _text.GetVisibility();
    }
    
    this.GetWidth = function(options){
        return _text.GetWidth(options);
    }
    
    
    this.Gone = function(){
        _text.Gone();
    }
    
    this.Hide = function(){
        _text.Hide();
    }
    
    this.IsEnabled = function(){
        return _text.IsEnabled();
    }
    
    this.IsOverlap = function(obj, depth){
        return _text.IsOverlap(obj, depth);
    }
    
    this.Resize = function(){
        _text.Resize();
    }
    
    this.SetBackAlpha = function(alpha){
        text.SetBackAlpha(alpha);
    }
    
    this.SetBackColor = function(color){
        _text.SetBackColor(color);
    }
    
    this.SetBackGradient = function (color1, color2, color3, options){
        _text.SetBackGradient(color1, color2, color3, options);
    }
    
    this.SetBackGradientRadial = function( x, y, radius, color1, color2, color3, options){
        _text.SetBackGradientRadial( x, y, radius, color1, color2, color3, options);
    }
    
    
    this.SetBackground = function(file, options){
        _text.SetBackground(file, options);
    }
    
    this.SetColorFilter = function(color, mode){
        _text.SetColorFilter(color, mode);
    }
    
    this.SetDescription = function(desc){
        _text.SetDescription(desc);
    }
    
    this.SetEllipsize = function(mode){
        _text.SetEllipsize(mode);
    }
    
    this.SetEnabled = function(bool){
        _text.SetEnabled(bool);
    }
    
    this.SetHtml = function(html){
        _text.SetHtml(html);
    }
    
    this.SetLog = function(maxlines){
        _text.SetLog(maxlines);
    }
    
    this.SetMargins = function(left, top, right, bottom, mode){
        _text.SetMargins(left, top, right, bottom, mode);
    }
    
    this.SetPosition = function(left, top, width, height, options){
        _text.SetPosition(left, top, width, height, options);
    }
    
    this.SetPadding = function(left, top, right, bottom, mode){
        _text.SetPadding(left, top, right, bottom, mode);
    }
    this.SetOnTouch = function(onTouch){
        _text.SetOnTouch(onTouch);
    }
    
    this.SetOnTouchDown = function(onTouchDown){
        _text.SetOnTouchDown(onTouchDown);
    }
    
    this.SetOnTouchMove = function(onTouchMove){
        _text.SetOnTouchMove(onTouchMove);
    }
    
    this.SetOnTouchUp = function(onTouchUp){
        _text.SetOnTouchUp(onTouchUp);
    }
    
    this.SetOnLongTouch = function(onLongTouch){
        _text.SetOnLongTouch(onLongTouch);
    }
    
    this.SetScale = function(x, y){
        _text.SetScale(x,y);
    }
    
    this.SetText = function (text){
        _text.SetText(text);
    }
    
    this.SetTextColor = function(color){
        _text.SetTextColor(color);
    }
    
    this.SetTextSize = function(size, mode){
        _text.SetTextSize(size, mode);
    }
    
    this.SetTextShadow = function(radius, dx, dy, color){
        _text.SetTextShadow(radius, dx, dy, color);
    }
    
    this.SetVisibility = function(mode){
        _text.SetVisibility(mode);
    }
    
    this.Show = function(){
        _text.Show();
    }
    
    this.Tween = function( target, duration, type, repeat, yoyo, callback){
        _text.Tween( target, duration, type, repeat, yoyo, callback)
    }
    
    _text = drawText(text, width, height, options, parentLay, this);
}

function drawText(text, width, height, options, parentLay, textObj){
    let _text;
    _text = app.AddText(parentLay, text, width, height, options);
    _text.SetFontFile(defaultFont);
    return _text;
}



// The Icon Code Should Be Used For Help For Creating Other Components

let _iconButton;
function _iconButtonObject(iconName, parentLay){
    
    _drawIconButton(iconName, parentLay, this)
}


function _drawIconButton(iconName, parentLay, iconObj){
    _iconColor = stateColor(md_theme_light_background,md_theme_dark_background);
    radius = 50/100 * 120;
    
    _iconButton = app.AddButton(parentLay, iconName, null, null, 'Custom,Lego');
    _iconButton.SetSize(120, 120, 'px')
    
    _iconButton.SetStyle(_iconColor,_iconColor,radius,null,null,0);
    _iconButton.SetFontFile(defaultIcons)
}





function emptyDlgObject(dialogLayout, width, height, options){
    let emptyDlg;
    this.Dismiss = function(){
        emptyDlg.Dismiss()
    }
    
    this.Focus = function(){
        emptyDlg.Focus()
    }
    
    this.ClearFocus = function(){
        emptyDlg.ClearFocus()
    }
    
    this.SetDescription = function(description){
        emptyDlg.SetDescription(description)
    }
    
    this.SetMargins = function(left, top, right, bottom, mode){
        emptyDlg.SetMargins(left, top, right, bottom, mode)
    }
    
    this.SetPosition = function(left, top, width, height, options){
        emptyDlg.SetPosition(left, top, width, height, options)
    }
    
    this.SetOnCancel = function(onCancel){
        emptyDlg.SetOnCancel(onCancel)
    }
    
    this.SetOnTouch = function(onTouch){
        emptyDlg.SetOnTouch(onTouch(evDetails))
    }
    
    this.Hide = function(){
        emptyDlg.Hide()
    }
    
    this.Gone = function(){
        emptyDlg.Gone()
    }
    
    this.EnableBackKey = function(bool){
        emptyDlg.EnableBackKey(bool)
    }
    
    this.SetOnBack = function(onBack){
        emptyDlg.SetOnBack(onBack)
    }
    
    emptyDlg = drawEmptyDialog(dialogLayout, width, height, options, this)
}

function drawEmptyDialog(dialogLayout, width, height, options, empty__thirdIconObj){
    let emptyDlg;
    dlgColor = stateColor(md_theme_light_secondaryContainer,md_theme_dark_secondaryContainer);
    
    emptyDlg = app.CreateDialog();
    emptyDlg.SetSize(width, height);
    emptyDlg.SetBackColor("#00000000");
    
    dlgUi = app.CreateLayout('Card')
    dlgUi.SetElevation(0)
    dlgUi.SetSize(width, height) 
    dlgUi.SetCornerRadius(12)
    
    dlgUi.SetBackColor(dlgColor)
    emptyDlg.AddLayout(dlgUi);
    emptyDlg.Show();
    return emptyDlg;
}





function sliderObject(value, range, width, layout) {
    let sliderElem;
    this.GetValue = function () {
        
    }
    
    this.SetValue = function (value) {
        
    }
    
    sliderElem = drawSlider(value, range, width, layout);
}

function drawSlider(value, range, width, layout) {
    let sliderElem;
    sliderElem = app.AddImage(layout, null, width, 0.1);
    //sliderElem.SetMargins( 16,16,16,16,"px")
    sliderElem.SetOnTouchMove((ev) => {
        drawSliderShading(ev.x[0]);
    })
    sliderElem.SetAutoUpdate(false)
    drawSliderShading(0);
    return sliderElem;
}

function drawSliderShading(x) {
    
    sliderElem.Clear()
    sliderElem.SetLineWidth(8)
    sliderElem.SetPaintColor(stateColor(md_theme_light_primaryContainer, md_theme_dark_primaryContainer))
    sliderElem.DrawLine(x, 0.5, 1, 0.5)
    sliderElem.SetPaintColor(stateColor(md_theme_light_primary, md_theme_dark_primary))
    sliderElem.DrawLine(0, 0.5, x, 0.5)
    sliderElem.SetPaintColor(stateColor(md_theme_light_primary, md_theme_dark_primary))
    sliderElem.DrawLine(x, 0.25, x, 0.75)
    sliderElem.Update()
}




function chipObject(type, text, icon, width, height, parentLay) {
    let chipElem;
    
    chipElem = drawChip(type, text, icon, width, height, parentLay)
}


function drawChip(type, text, icon, width, height, parentLay) {
    let chipElem;
    if (type.toLowerCase() === 'assist') {
        chipElem = app.AddButton(parentLay, text, width, height, 'Custom,FontAwesome');
        chipElem.SetFontFile(defaultFont)
        chipElem.SetTextColor(stateColor(md_theme_light_onSurface, md_theme_dark_onSurface));
        chipElem.SetText(text)
        chipElem.SetStyle(clrOutlined(), clrOutlined(), 8, stateColor(md_theme_light_outline, md_theme_dark_outline), 1, 0.1);
    } else if (type.toLowerCase() === 'filter') {
        chipElem = app.AddButton(parentLay, text, width, height, 'Custom,FontAwesome');
        chipElem.SetFontFile(defaultFont)
        chipElem.SetTextColor(stateColor(md_theme_light_onSurface, md_theme_dark_onSurface));
        chipElem.SetText(text)
        chipElem.SetStyle(clrOutlined(), clrOutlined(), 8, stateColor(md_theme_light_outline, md_theme_dark_outline), 1, 0.1);
        
        chipElem.SetOnTouch(() => {
            chipElem.SetText(`[fa-check]` + ' ' + text)
            chipElem.SetStyle(stateColor(md_theme_light_onSurfaceVariant, md_theme_dark_onSurfaceVariant), stateColor(md_theme_light_onSurfaceVariant, md_theme_dark_onSurfaceVariant), 8, stateColor(md_theme_light_outline, md_theme_dark_outline), 1, 0.1);
        });
    }
    return chipElem;
}




function textFieldObject(type, width, height, hint, options, labeled, parentLay) {
    let textEdit;
    this.SetOnEnter = function (onEnter) {
        textEdit.SetOnEnter(onEnter)
    }
    textEdit = drawTextField(type, width, height, hint, options, labeled, parentLay)
}

function drawTextField(type, width, height, hint, options, labeled, parentLay) {
    let textEdit;
    if (type.toLowerCase() === 'texteditfilled' || type.toLowerCase() === 'tef') {
        
        textEdit = MUI.CreateTextEditFilled(width, options, hint, labeled, stateColor(md_theme_light_primary, md_theme_dark_primary));
        parentLay.AddChild(textEdit);
        
    } else if (type.toLowerCase() === 'texteditfilledactive' || type.toLowerCase() === 'tefa') {
        
        textEdit = MUI.CreateTextEditFilledA(width, options, hint, labeled, stateColor(md_theme_light_primary, md_theme_dark_primary));
        parentLay.AddChild(textEdit);
        
    } else if (type.toLowerCase() === 'texteditoutline' || type.toLowerCase() === 'teo') {
        
        textEdit = MUI.CreateTextEditOutline(width, options, hint, labeled, stateColor(md_theme_light_primary, md_theme_dark_primary));
        parentLay.AddChild(textEdit);
        
    } else if (type.toLowerCase() === 'texteditoutlineactive' || type.toLowerCase() === 'teoa') {
        
        textEdit = MUI.CreateTextEditOutlineA(width, options, hint, labeled, stateColor(md_theme_light_primary, md_theme_dark_primary), stateColor(md_theme_light_primary, md_theme_dark_primary));
        parentLay.AddChild(textEdit);
        
    }
    return textEdit;
}

function filledButtonObject(btnName, width, height, icon, parentLay) {
    let filledButton;

    this.Animate = function (type, callback, time) {
        filledButton.Animate(type, callback, time);
    }
    this.SetScale = function (x, y) {
        filledButton.SetScale(x, y);
    }
    this.SetVisibility = function (mode) {
        filledButton.SetVisibility(mode);
    }
    this.SetEnabled = function (enableBool) {
        filledButton.SetEnabled(enableBool);
    }
    this.SetEllipsize = function (mode) {
        filledButton.SetEllipsize(mode);
    }
    this.SetDescription = function (desc) {
        filledButton.SetDescription(desc);
    }
    this.SetHtml = function (str) {
        filledButton.SetHtml(str);
    }
    this.SetText = function (text) {
        filledButton.SetText(text);
    }
    this.SetTextSize = function (size, mode) {
        filledButton.SetTextSize(size, mode);
    }
    this.SetPosition = function(left,top,width,height,options) {
        filledButton.SetPosition(left,top,width,height,options)
    }
    this.SetMargins = function (left, top, right, bottom, mode) {
        filledButton.SetMargins(left, top, right, bottom, mode);
    }
    this.SetPadding = function (left, top, right, bottom, mode) {
        filledButton.SetPadding(left, top, right, bottom, mode);
    }
    this.SetOnTouch = function (onTouch) {
        filledButton.SetOnTouch(I(onTouch.bind(filledButton)));
    }
    this.SetOnLongTouch = function (onLongTouch) {
        filledButton.SetOnLongTouch(I(onLongTouch.bind(filledButton)));
    }
    this.Tween = function (target, duration, type, repeat, yoyo, callback) {
        filledButton.Tween(target, duration, type, repeat, yoyo, callback);
    }
    this.Focus = function () {
        filledButton.Focus();
    }
    this.Gone = function () {
        filledButton.Gone();
    }
    this.Show = function () {
        filledButton.Show();
    }
    this.Hide = function () {
        filledButton.Hide();
    }


    filledButton = drawFilledButton(btnName, width, height, icon, parentLay)
}

function drawFilledButton(btnName, width, height, icon, parentLay) {
    let filledButton;

    filledButton = app.AddButton(parentLay, null, width, height, 'Custom,FontAwesome');
    filledButton.SetStyle(filledBtnClr.value, filledBtnClr.value, 20, null, null, 0)
    filledButton.SetTextColor(filledBtnTxtClr.value)
    
    if (icon === null) {
        filledButton.SetText(btnName);
    } else {
        filledButton.SetText(`[fa-${icon}]` + ' ' + btnName);
    }

    filledButton.SetFontFile(defaultFont);
    
    filledBtnClr.subscribe((value)=>{
        filledButton.SetStyle(value, value, 20, null, null, 0)
    })
    
    filledBtnTxtClr.subscribe((value)=>{
        filledButton.SetTextColor(value)
    })
    
    return filledButton;
}





function elevatedButtonObject(btnName, width, height, icon, parentLay) {
    let elevatedButton;
    // Button Methods :::
    
    this.Animate = function (type, callback, time) {
        elevatedButton.Animate(type, callback, time);
    }
    this.SetScale = function (x, y) {
        elevatedButton.SetScale(x, y);
    }
    this.SetVisibility = function (mode) {
        elevatedButton.SetVisibility(mode);
    }
    this.SetEnabled = function (enableBool) {
        elevatedButton.SetEnabled(enableBool);
    }
    this.SetEllipsize = function (mode) {
        elevatedButton.SetEllipsize(mode);
    }
    this.SetDescription = function (desc) {
        elevatedButton.SetDescription(desc);
    }
    this.SetHtml = function (str) {
        elevatedButton.SetHtml(str);
    }
    this.SetText = function (text) {
        elevatedButton.SetText(text);
    }
    this.SetTextSize = function (size, mode) {
        elevatedButton.SetTextSize(size, mode);
    }
    this.SetMargins = function (left, top, right, bottom, mode) {
        elevatedButton.SetMargins(left, top, right, bottom, mode);
    }
    this.SetPadding = function (left, top, right, bottom, mode) {
        elevatedButton.SetPadding(left, top, right, bottom, mode);
    }
    this.SetOnTouch = function (onTouch) {
        elevatedButton.SetOnTouch(I(onTouch.bind(elevatedButton)));
    }
    this.SetOnLongTouch = function (onLongTouch) {
        elevatedButton.SetOnLongTouch(I(onLongTouch.bind(elevatedButton)));
    }
    this.Tween = function (target, duration, type, repeat, yoyo, callback) {
        elevatedButton.Tween(target, duration, type, repeat, yoyo, callback);
    }
    this.Focus = function () {
        elevatedButton.Focus();
    }
    this.Gone = function () {
        elevatedButton.Gone();
    }
    this.Show = function () {
        elevatedButton.Show();
    }
    this.Hide = function () {
        elevatedButton.Hide();
    }

    
    //Call It 
    elevatedButton = drawElevatedBtn(btnName, width, height, icon, parentLay, this)
}


function drawElevatedBtn(btnName, width, height, icon, parentLay, elevatedObj) {
    let elevatedButton;
    elevatedButton = app.AddButton(parentLay, null, width, height, 'Custom,FontAwesome');
    elevatedButton.SetTextColor(stateColor(md_theme_light_primary, md_theme_dark_primary));
    elevatedButton.SetFontFile(defaultFont);
    
    if (icon === null) {
        elevatedButton.SetText(btnName);
    } else elevatedButton.SetText(`[fa-${icon}]` + ' ' + btnName);
    
    elevatedButton.SetStyle(clr1(), clr1(), 20, null, null, 0);
    
    
    return elevatedButton;
}

function clr1() {
    return stateColor(md_theme_light_secondaryContainer, md_theme_dark_secondaryContainer);
}


function filledTonalButtonObject(btnName, width, height, icon, parentLay) {
    let filledTonalButton;
    // Button Methods :::
    
    this.Animate = function (type, callback, time) {
        filledTonalButton.Animate(type, callback, time);
    }
    this.SetScale = function (x, y) {
        filledTonalButton.SetScale(x, y);
    }
    this.SetVisibility = function (mode) {
        filledTonalButton.SetVisibility(mode);
    }
    this.SetEnabled = function (enableBool) {
        filledTonalButton.SetEnabled(enableBool);
    }
    this.SetEllipsize = function (mode) {
        filledTonalButton.SetEllipsize(mode);
    }
    this.SetDescription = function (desc) {
        filledTonalButton.SetDescription(desc);
    }
    this.SetHtml = function (str) {
        filledTonalButton.SetHtml(str);
    }
    this.SetText = function (text) {
        filledTonalButton.SetText(text);
    }
    this.SetTextSize = function (size, mode) {
        filledTonalButton.SetTextSize(size, mode);
    }
    this.SetMargins = function (left, top, right, bottom, mode) {
        filledTonalButton.SetMargins(left, top, right, bottom, mode);
    }
    this.SetPadding = function (left, top, right, bottom, mode) {
        filledTonalButton.SetPadding(left, top, right, bottom, mode);
    }
    this.SetOnTouch = function (onTouch) {
        filledTonalButton.SetOnTouch(I(onTouch.bind(filledTonalButton)));
    }
    this.SetOnLongTouch = function (onLongTouch) {
        filledTonalButton.SetOnLongTouch(I(onLongTouch.bind(filledTonalButton)));
    }
    this.Tween = function (target, duration, type, repeat, yoyo, callback) {
        filledTonalButton.Tween(target, duration, type, repeat, yoyo, callback);
    }
    this.Focus = function () {
        filledTonalButton.Focus();
    }
    this.Gone = function () {
        filledTonalButton.Gone();
    }
    this.Show = function () {
        filledTonalButton.Show();
    }
    this.Hide = function () {
        filledTonalButton.Hide();
    }

    
    //Call It
    
    filledTonalButton = drawFilledTonalBtn(btnName, width, height, icon, parentLay, this)
}

function drawFilledTonalBtn(btnName, width, height, icon, parentLay, filledTonalObj) {
    let filledTonalButton;
    filledTonalButton = app.AddButton(parentLay, null, width, height, 'Custom,FontAwesome');
    filledTonalButton.SetFontFile(defaultFont)
    filledTonalButton.SetTextColor(stateColor(md_theme_light_onSecondaryContainer, md_theme_dark_onSecondaryContainer));
    
    
    if (icon === null) {
        filledTonalButton.SetText(btnName);
    } else filledTonalButton.SetText(`[fa-${icon}]` + ' ' + btnName);
    
    filledTonalButton.SetStyle(stateColor(md_theme_light_primaryContainer, md_theme_dark_primaryContainer), stateColor(md_theme_light_primaryContainer, md_theme_dark_primaryContainer), 20, null, null, 0);
    
    return filledTonalButton;
}

function outlinedButtonObject(btnName, width, height, icon, parentLay) {
    // Button Methods :::
    let _outlinedButton;
    this.Animate = function (type, callback, time) {
        _outlinedButton.Animate(type, callback, time);
    }
    this.SetScale = function (x, y) {
        _outlinedButton.SetScale(x, y);
    }
    this.SetVisibility = function (mode) {
        _outlinedButton.SetVisibility(mode);
    }
    this.SetEnabled = function (enableBool) {
        _outlinedButton.SetEnabled(enableBool);
    }
    this.SetEllipsize = function (mode) {
        _outlinedButton.SetEllipsize(mode);
    }
    this.SetDescription = function (desc) {
        _outlinedButton.SetDescription(desc);
    }
    this.SetHtml = function (str) {
        _outlinedButton.SetHtml(str);
    }
    this.SetText = function (text) {
        _outlinedButton.SetText(text);
    }
    this.SetTextSize = function (size, mode) {
        _outlinedButton.SetTextSize(size, mode);
    }
    this.SetMargins = function (left, top, right, bottom, mode) {
        _outlinedButton.SetMargins(left, top, right, bottom, mode);
    }
    this.SetPadding = function (left, top, right, bottom, mode) {
        _outlinedButton.SetPadding(left, top, right, bottom, mode);
    }
    this.SetOnTouch = function (onTouch) {
        _outlinedButton.SetOnTouch(I(onTouch.bind(_outlinedButton)));
    }
    this.SetOnLongTouch = function (onLongTouch) {
        _outlinedButton.SetOnLongTouch(I(onLongTouch.bind(_outlinedButton)));
    }
    this.Tween = function (target, duration, type, repeat, yoyo, callback) {
        _outlinedButton.Tween(target, duration, type, repeat, yoyo, callback);
    }
    this.Focus = function () {
        _outlinedButton.Focus();
    }
    this.Gone = function () {
        _outlinedButton.Gone();
    }
    this.Show = function () {
        _outlinedButton.Show();
    }
    this.Hide = function () {
        _outlinedButton.Hide();
    }

    
    //Call It 
    _outlinedButton = drawOutlinedBtn(btnName, width, height, icon, parentLay, this);
}

function drawOutlinedBtn(btnName, width, height, icon, parentLay, outlineObj) {
    let _outlinedButton = app.AddButton(parentLay, null, width, height, 'Custom,FontAwesome');
    _outlinedButton.SetFontFile(defaultFont)
    _outlinedButton.SetTextColor(stateColor(md_theme_light_primary, md_theme_dark_primary));
    
    if (icon === null) {
        _outlinedButton.SetText(btnName);
    } else _outlinedButton.SetText(`[fa-${icon}]` + ' ' + btnName);
    
    _outlinedButton.SetStyle(clrOutlined(), clrOutlined(), 20, strokeClrOutlined(), 1, 0);
    
    return _outlinedButton;
}

function clrOutlined() {
    return stateColor(md_theme_light_surface, md_theme_dark_surface);
}

function strokeClrOutlined() {
    return stateColor(md_theme_light_outline, md_theme_dark_outline);
}


function textButtonObject(btnName, width, height, icon, parentLay) {
    
    let _textButton;
    // Button Methods :::
    this.SetMargins = function (left, top, right, bottom, mode) {
        _textButton.SetMargins(left, top, right, bottom, mode);
    }
        this.Animate = function (type, callback, time) {
        _textButton.Animate(type, callback, time);
    }
    
    
    this.SetScale = function (x, y) {
        _textButton.SetScale(x, y);
    }
    this.SetVisibility = function (mode) {
        _textButton.SetVisibility(mode);
    }
    this.SetEnabled = function (enableBool) {
        _textButton.SetEnabled(enableBool);
    }
    this.SetEllipsize = function (mode) {
        _textButton.SetEllipsize(mode);
    }
    this.SetDescription = function (desc) {
        _textButton.SetDescription(desc);
    }
    this.SetHtml = function (str) {
        _textButton.SetHtml(str);
    }
    this.SetText = function (text) {
        _textButton.SetText(text);
    }
    this.SetTextSize = function (size, mode) {
        _textButton.SetTextSize(size, mode);
    }
    
    this.SetPadding = function (left, top, right, bottom, mode) {
        _textButton.SetPadding(left, top, right, bottom, mode);
    }
    this.SetOnTouch = function (onTouch) {
        _textButton.SetOnTouch(I(onTouch.bind(_textButton)));
    }
    this.SetOnLongTouch = function (onLongTouch) {
        _textButton.SetOnLongTouch(I(onLongTouch.bind(_textButton)));
    }
    this.Tween = function (target, duration, type, repeat, yoyo, callback) {
        _textButton.Tween(target, duration, type, repeat, yoyo, callback);
    }
    this.Focus = function () {
        _textButton.Focus();
    }
    this.Gone = function () {
        _textButton.Gone();
    }
    this.Show = function () {
        _textButton.Show();
    }
    
    this.Hide = function (){
        _textButton.Hide();
    }
    
    // Call It
    _textButton = drawTextBtn(btnName, width, height, icon, parentLay, this);
    
}

function drawTextBtn(btnName, width, height, icon, parentLay, textBtnObj) {
    let _textButton = app.AddButton(parentLay, null, width, height, 'Custom,FontAwesome');
    _textButton.SetFontFile(defaultFont)
    _textButton.SetTextColor(stateColor(md_theme_light_primary, md_theme_dark_primary));
    
    if (icon === null) {
        _textButton.SetText(btnName);
    } else _textButton.SetText(`[fa-${icon}]` + ' ' + btnName);
    
    _textButton.SetStyle(backgroundColor(), backgroundColor(), 20, null, null, 0);
    
    return _textButton;
}



function fabObject(icon, parentLay) {
    let fabContainer;
    this.SetOnTouch = function (onTouch) {
        fabContainer.SetOnTouch( M( fabContainer, onTouch) )
    }
    /* If the unwanted layout is detected warn dev
       If FillXY isnt being used notify dev
    */
   
    if (unpositionalLayout.includes(layoutType) || !layoutOptions.includes('FillXY')){
        warnDeveloper('FAB Component Only Used With Absolute Layouts\n With FillXY','Switch To Absolute Layout\nWith FillXY');
    }
    else {
        fabContainer = drawFAB(icon, parentLay, this);
    }
}

function drawFAB(icon, parentLay, fabObj) {
    let _fab;
    _fabColor = stateColor(md_theme_light_primaryContainer, md_theme_dark_primaryContainer)
    _fabIconClr = stateColor(md_theme_light_onPrimaryContainer, md_theme_dark_onPrimaryContainer)
    
    _fab = app.AddButton(parentLay, icon, null, null, 'Customize,Lego');
    _fab.SetSize(56,56,'dp');
    
    _fab.SetTextSize(24,'dp');
    _fab.SetTextColor(_fabIconClr);
    _fab.SetFontFile(defaultIcons);
    _fab.SetStyle(_fabColor,_fabColor,16,null,null,0);
    
    
    leftPos = DW()- dpToPxConversion(72);
    topPos = DH()- dpToPxConversion(56+16);
    
    _fab.SetPosition(leftPos, topPos, null, null, 'px')
    
    if(fabObj.onTouch){ 
        _fab.SetOnTouch(function(){
            fabObj.onTouch();
        });
    }
    return _fab;
}





function smallFABObject(icon, parentLay) {
    let smallFabContainer;
    
    this.SetOnTouch = function (onTouch) {
        smallFabContainer.SetOnTouch( M( null, onTouch) )
    }
    
    this.SetRawAlignment = function(left, top){
        smallFabContainer.SetPosition(left, top);
    }
    
    if (unpositionalLayout.includes(layoutType) || !layoutOptions.includes('FillXY')){
        warnDeveloper('FAB Component Only Used With Absolute Layouts\n With FillXY','Switch To Absolute Layout\nWith FillXY');
    }
    else {
        smallFabContainer = drawSmallFab(icon, parentLay, this);
        
    } 
}

function drawSmallFab(icon, parentLay, j) {
    let _smallFab;
    let _smallFabClr = stateColor(md_theme_light_primaryContainer, md_theme_dark_primaryContainer)
    let _smallFabTxtClr = stateColor(md_theme_light_onPrimaryContainer, md_theme_dark_onPrimaryContainer);
    
    _smallFab = app.AddButton(parentLay, icon, null, null, 'Customize,Lego');
    _smallFab.SetSize(40,40,'dp');
    
    _smallFab.SetTextSize(20,'dp');
    _smallFab.SetTextColor(_smallFabTxtClr);
    _smallFab.SetFontFile(defaultIcons);
    _smallFab.SetStyle(_smallFabClr,_smallFabClr,12,null,null,0);
    
    
    leftPos = DW()- dpToPxConversion(72);
    topPos = DH()- dpToPxConversion(56+16);
    
    //_smallFab.SetPosition(leftPos, topPos, null, null, 'px')
    
    
    return _smallFab;
}




function largeFABObject(icon, parentLay) {
    let largeFabContainer;
    
    this.SetOnTouch = function (onTouch) {
        this.onTouch = onTouch;
    }
    
    this.SetMargins = function (left, top, right, bottom, mode) {
        largeFabContainer.SetMargins(left, top, right, bottom, mode);
    }
    
    this.SetPosition = function (left, top, width, height, options) {
        largeFabContainer.SetPosition(left, top, width, height, options);
    }
    
    largeFabContainer = drawLargeFab(icon, parentLay, this)
}

function drawLargeFab(icon, parentLay, largefabOBj) {
    let largeFabContainer;
    
    largeFabContainer = app.CreateLayout('Linear', 'TouchThrough,Spy');
    largeFabContainer.SetSize(96, 96, 'dp');
    
    
    const fab = app.CreateLayout('Card', 'Right,Bottom,FillXY');
    fab.SetSize(96, 96, 'dp');
    fab.SetElevation(0);
    fab.SetCornerRadius(28);
    
    const _fabIcon = app.CreateText(icon, null, null, 'H/VCenter,FillXY');
    _fabIcon.SetFontFile(defaultIcons);
    _fabIcon.SetOnTouchDown(function () {
        largefabOBj.onTouch();
    });
    
    _fabIcon.SetTextSize(36);
    fab.AddChild(_fabIcon);
    largeFabContainer.AddChild(fab);
    
    
    fab.SetBackColor(stateColor(md_theme_light_primaryContainer, md_theme_dark_primaryContainer));
    _fabIcon.SetTextColor(stateColor(md_theme_light_onPrimaryContainer, md_theme_dark_onPrimaryContainer))
    
    parentLay.AddChild(largeFabContainer);
    return largeFabContainer;
    
}

let switchValue;

function switchObject(switchType, value, parent_Layout) {
    let _switch;
    
    this.GetValue = function () {
        return switchValue;
    }
    this.SetOnToggle = function (onToggle) {
        this.onToggle = onToggle;
    }
    this.SetPosition = function (left, top, width, height, options) {
        _switch.SetPosition(left, top, width, height, options)
    }
    
    this.SetMargins = function(left,top,right,bottom,mode){
        _switch.SetMargins(left,top,right,bottom,mode)
    }
    /*
    switch(switchType){
        case 'noIcon':
            drawSwitchNoIcon(value,parent_Layout,this);
            break;
        case 'onIcon':
            drawSwitchOnIcon(value,parent_Layout,this);
            break;
        case 'allIcon':
            drawSwitchAllIcon(value,parent_Layout,this);
    }
    */
    
    //Temporary !
    _switch = drawSwitchNoIcon(value, parent_Layout, this);
}



function drawSwitchNoIcon(value, parent_Layout, objFunc) {
    let _switch;
    let handle,handle2;
    switchValue = value;
    
    _switch = app.CreateLayout('Card')
    _switch.SetSize(52, 32, 'dp');
    _switch.SetElevation(0.9)
    _switch.SetCornerRadius(16)
    
    
    handle = app.CreateImage(null, 0.085, 0.05)
    handle.DrawCircle(0.52, 0.42, 0.30)
    handle.SetAutoUpdate(false)
    _switch.SetMargins(0.05)
    handle.Hide()
    
    handle2 = app.CreateImage(null, 0.085, 0.05)
    handle2.DrawCircle(0.52, 0.42, 0.45)
    handle2.SetAutoUpdate(false)
    handle2.SetMargins(0.052)
    handle2.Hide()
    
    if (value) {
        handle2.Show()
        if (theme === 'light') {
            handle2.SetPaintColor(md_theme_light_onPrimary)
            _switch.SetBackColor(md_theme_light_primaryContainer)
        } else {
            handle2.SetPaintColor(md_theme_dark_onPrimary)
            _switch.SetBackColor(md_theme_dark_primaryContainer)
        }
    } else {
        handle.Show()
        handle2.Hide()
        if (theme === 'light') {
            handle.SetPaintColor(md_theme_light_onSurfaceVariant)
            _switch.SetBackColor(md_theme_light_surfaceVariant)
        } else {
            handle.SetPaintColor(md_theme_dark_onSurfaceVariant)
            _switch.SetBackColor(md_theme_dark_surfaceVariant)
        }
    }
    
    handle.SetOnTouchUp(M(this,function () {
        handle.Hide()
        handle2.Show()
        switchValue = true;
        if (theme === 'light') {
            handle2.SetPaintColor(md_theme_light_onPrimary)
            _switch.SetBackColor(md_theme_light_primaryContainer)
        } else {
            handle2.SetPaintColor(md_theme_dark_onPrimary)
            _switch.SetBackColor(md_theme_dark_primaryContainer)
        }
        try {
            objFunc.onToggle(switchValue);
        } catch (err) {
            return null;
        }
        
    }))
    
    handle2.SetOnTouchUp(M(this,function () {
        handle2.Hide()
        handle.Show()
        switchValue = false;
        
        if (theme === 'light') {
            handle.SetPaintColor(md_theme_light_onSurfaceVariant)
            _switch.SetBackColor(md_theme_light_surfaceVariant)
        } else {
            handle.SetPaintColor(md_theme_dark_onSurfaceVariant)
            _switch.SetBackColor(md_theme_dark_surfaceVariant)
        }
        
        try {
            objFunc.onToggle(switchValue);
        } catch (err) {
            return null;
        }
    }))
    
    parent_Layout.AddChild(_switch);
    _switch.AddChild(handle)
    _switch.AddChild(handle2)
    
    return _switch;
    
}

//Variable Is made global so that clearInterval with method
//stopProgress works, to avoid an not defined error.
var animation, progressContainer, _progressIndicator;


function progressObject(progressType, width, parentLay) {
    
    this.StopProgress = function () {
        progressContainer.Hide();
        progressContainer.Destroy();
        clearInterval(animation);
    }
    
    this.SetValue = function (value) {
        this.value = value;
        //
        _progressIndicator.SetSize(M(progressContainer, parseFloat(value / 100), 0.05));
    }
    
    this.HideContainer = function () {
        app.DestroyLayout(this.progressContainer);
    }
    
    this.GetValue = function () {
        return this.value;
    }
    
    this.SetMargins = function (left, top, right, bottom, mode) {
        progressContainer.SetMargins(left, top, right, bottom, mode)
    }
    this.SetPosition = function (left, top, width, height, options) {
        progressContainer.SetPosition(left, top, width, height, options)
    }
    
    if (!parentLay){
        warnDeveloper('No Parent For Progress','No Parent For Progress');
    }
    else{
        drawProgressBar(progressType, width, parentLay, this);
    }
}

function drawProgressBar(progressType, width, parentLay, progressObj) {
    
    if (progressType === 'linear') {
        let trackColor = '#E6E0E9';
        progressContainer = app.CreateLayout('Linear', 'Horizontal,Left,FillXY');
        progressContainer.SetSize(width, 0.005);
        _progressIndicator = app.AddText(progressContainer, '');
        
        if (theme === 'light') {
            progressContainer.SetBackColor(md_theme_light_surfaceVariant);
            _progressIndicator.SetBackColor(md_theme_light_primary);
        } else {
            progressContainer.SetBackColor(md_theme_dark_surfaceVariant);
            _progressIndicator.SetBackColor(md_theme_dark_primary);
        }
        parentLay.AddChild(progressContainer);
    }
    
    if (progressType === 'linearIntermediate') {
        
        progressContainer = app.CreateLayout('Linear', 'Horizontal,Left,FillXY');
        progressContainer.SetSize(width, 0.005);
        
        _progressIndicator = app.AddText(progressContainer, '', null, null, 'Left,FillXy');
        
        animation = setInterval(function () {
            _progressIndicator.Animate('SlideToRight', null, null);
        }, 600);
        
        progressContainer.SetBackColor(stateColor(md_theme_light_surfaceVariant, md_theme_dark_surfaceVariant))
        _progressIndicator.SetBackColor(stateColor(md_theme_light_primary, md_theme_dark_primary))
        
        parentLay.AddChild(progressContainer);
    }
}


var _radio;

function radioListObject(list, width, height, parentLay) {
        this.GetCheckedItems = function () {
        return _radio.GetCheckItem();
    }
    
    this.CheckItemByIndex = function (checkItem) {
        return _radio.CheckItemByIndex(checkItem);
    }
    
    this.GetItem = function (title) {
        return _radio.GetItem(title);
    }
    
    this.RemoveAll = function () {
        return _radio.RemoveAll();
    }
    
    this.RemoveItem = function (title) {
        return _radio.RemoveItem(title);
    }
    
    this.RemoveItemByIndex = function (index) {
        return _radio.RemoveItemByIndex(index);
    }
    
    this.ScrollToItem = function (title, body) {
        return _radio.ScrollToItem(title, body);
    }
    
    this.ScrollToItemByIndex = function (index) {
        return _radio.ScrollToItemByIndex(index);
    }
    
    this.SelectItem = function (item) {
        return _radio.SelectItem(item);
    }
    
    this.SelectItemByIndex = function (index, scroll) {
        _radio.SelectItemByIndex(index, scroll);
    }
    
    this.SetOnSelect = function (onSelect) {
        return _radio.SetOnSelect(onSelect);
    }
    
    this.SetOnTouch = function (onTouch) {
        this.onTouch = onTouch;
    }
    
    this.SetList = function (list, delim) {
        return _radio.SetList(list, delim);
    }
    
    this.SetMargins = function (left, top, right, bottom) {
        _radio.SetMargins(left, top, right, bottom);
    }
    
    this.SetPosition = function (left, top, width, height, options) {
        _radio.SetPosition(left, top, width, height, options);
    }
    
    this.SetSize = function (width, height) {
        _radio.SetSize(width, height);
    }
    
    this.SetScale = function (x, y) {
        _radio.SetScale(x, y);
    }
    
    this.ShowContainer = function () {
        _radio.Show();
    }
    
    this.HideContainer = function () {
        _radio.Hide();
    }
    
    this.GetLength = function () {
        return _radio.GetLength();
    }
    
    this.InsertItem = function (index, title, body, image) {
        _radio.InsertItem(index, title, body, image);
    }
    
    this.IsVisible = function () {
        return _radio.IsVisible();
    }
    
    this.IsEnabled = function () {
        return _radio.IsEnabled();
    }

    
    addRadioUi(list, width, height, parentLay)
}

function addRadioUi(list, width, height, parentLay, index) {
    _radio = MUI.CreateRadio(list, width, height, stateColor(md_theme_light_primary, md_theme_dark_primary));
    _radio.SetTextColor(stateColor(md_theme_light_onSurfaceVariant, md_theme_dark_onSurfaceVariant))
    _radio.SetFontFile(defaultFont);
    
    
    parentLay.AddChild(_radio);
}

var dlgA;

function dlgBarObject(title, text, dlgOptions, noAction, yesAction) {
    
    this.Hide = function () {
        dlgA.Hide();
    }
    
    this.SetOnCancel = function (onCancel) {
        this.onCancel = onCancel;
    }
    this.SetOnAction = function (onAction) {
        this.onAction = onAction;
    }
    showDialogBar(title, text, dlgOptions, noAction, yesAction, this)
}

function showDialogBar(title, text, dlgOptions, noAction, yesAction, dlgFunc) {
    
    let width = function () {
        if (app.IsTablet()) return 560;
        else return 280;
    }
    
    dlgA = app.CreateDialog();
    dlgA.SetBackColor("#00000000");
    dlgA.SetOnCancel(function () {
        try {
            dlgFunc.onCancel();
            dlgA.Hide();
        } catch (err) {
            return null;
        }
    })
    
    dlgUi = app.CreateLayout('Card')
    dlgA.AddLayout(dlgUi)
    
    dlgUi.SetElevation(0)
    dlgUi.SetSize(width(), null, 'dp')
    dlgUi.SetCornerRadius(28)
    
    const box = app.CreateLayout("Linear", "Left");
    box.SetSize(width(), null, 'dp')
    dlgUi.AddChild(box);
    
    dlgTitle = app.AddText(box, title, 1, null, 'Bold,Left')
    dlgTitle.SetPadding(24, 24, 24, 16, 'dp')
    dlgTitle.SetTextSize(14)
    dlgTitle.SetFontFile(defaultFont)
    
    dlgText = app.AddText(box, text, null, null, 'Multiline,Left')
    dlgText.SetPadding(24, null, 24, 24, 'dp')
    dlgText.SetTextSize(14)
    dlgText.SetFontFile(defaultFont)
    
    const footer = app.AddLayout(box, "Linear", "Horizontal,Right");
    footer.SetSize(width(), null, 'dp');
    footer.SetPadding(24, null, 24, 24, "dp");
    
    noBtn = app.AddText(footer, noAction, null, null, 'Bold')
    noBtn.SetOnTouchUp(function () {
        if (dlgFunc.onAction) {
            dlgFunc.onAction(false);
            dlgA.Dismiss();
        }
    })
    noBtn.SetPadding(8, null, 8, null, "dp");
    
    yesBtn = app.AddText(footer, yesAction, null, null, 'Bold,VCenter')
    yesBtn.SetOnTouchUp(function () {
        if (dlgFunc.onAction) {
            dlgFunc.onAction(true);
            dlgA.Dismiss();
        }
    })
    yesBtn.SetPadding(8, null, 8, null, "dp");
    
    if (theme === 'light') {
        noBtn.SetTextColor(md_theme_light_primary)
        yesBtn.SetTextColor(md_theme_light_primary)
        dlgUi.SetBackColor(md_theme_light_secondaryContainer)
        dlgTitle.SetTextColor(md_theme_light_onSurface)
        dlgText.SetTextColor(md_theme_light_onSurfaceVariant)
    } else {
        noBtn.SetTextColor(md_theme_dark_primary)
        yesBtn.SetTextColor(md_theme_dark_primary)
        dlgUi.SetBackColor(md_theme_dark_secondaryContainer)
        dlgTitle.SetTextColor(md_theme_dark_onSurface)
        dlgText.SetTextColor(md_theme_dark_onSurfaceVariant)
    }
    this.dlgA.Show()
}




function SnackBarObject(text, btnAction, width, alignment) {
    
    
    let snackContainer;
    
    this.SetRawAlignment = function (top) {
        this.top = top;
    }
    
    this.SetTimeout = function (timeout) {
        this.timeout = timeout;
    }
    
    this.SetOnAction = function (onTouch) {
        this.onTouch = onTouch;
    }
    
    this.Show = function () {
        snackContainer = drawSnackBarUi(text, btnAction, width, alignment, this.onTouch, this.timeout, this.top);
    }
    
}

function drawSnackBarUi(text, btnAction, width, alignment, onTouch, timeout, top) {
    let snackUi;
    
    snackContainer = app.CreateLayout('Linear', alignment + ',FillXY,TouchThrough,Center');
    snackUi = app.CreateLayout('Card', '');
    
    snackContainer.AddChild(snackUi);
    if (top) {
        snackContainer.SetMargins(null, top);
    }
    snackUi.SetMargins(0.055, 0.018, 0.055, 0.018);
    snackUi.SetCornerRadius(4);
    snackUi.SetElevation(6);
    snackUi.SetSize(width, 0.065);
    
    const box = MUI.CreateLayout("Linear", "Horizontal");
    box.SetSize(width, 0.065);
    snackUi.AddChild(box);
    
    let snackText = app.CreateText(text, null, null, 'Multiline,AutoScale,VCenter');
    snackText.SetTextColor('black');
    snackText.SetMargins(0.055, 0.018, 0.055, 0.01);
    snackText.SetFontFile(defaultFont);
    snackText.SetTextSize(16);
    box.AddChild(snackText);
    
    let snackButton = app.CreateText(btnAction, null, null, "VCenter,FillXY,AutoScale,Wrap,Right");
    snackButton.SetMargins(null, null, 16, null, 'dp');
    snackButton.SetTextSize(16);
    snackButton.SetFontFile(defaultFont);
    
    
    if (onTouch) {
        snackButton.SetOnTouchUp(onTouch)
    }
    
    box.AddChild(snackButton);
    
    app.AddLayout(snackContainer);
    
    
    box.SetBackColor(stateColor(md_theme_light_inverseSurface, md_theme_dark_inverseSurface))
    snackText.SetTextColor(stateColor(md_theme_light_inverseOnSurface, md_theme_dark_inverseOnSurface))
    snackButton.SetTextColor(stateColor(md_theme_light_inversePrimary, md_theme_dark_inversePrimary))
    
    if (timeout === undefined) {
        setTimeout(function () {
            this.snackContainer.Animate('FadeOut', null, 980);
            app.DestroyLayout(this.snackContainer);
            this.snackContainer.Destroy()
        }, 3000);
    } else {
        setTimeout(function () {
            this.snackContainer.Animate('FadeOut', null, 300);
            app.DestroyLayout(this.snackContainer);
            this.snackContainer.Destroy()
        }, timeout);
    }
    
    return snackContainer;
}




function seekBarObject(value, range, width, parentLay) {
    let _seekBar;
    
    this.SetVisibility = function (mode) {
        _seekBar.SetVisibility(mode)
    }
    
    this.SetSize = function (width, height, options) {
        _seekBar.SetSize(width, height, options)
    }
    this.SetPosition = function (left, top, width, height, options) {
        _seekBar.SetPosition(left, top, width, height, options)
    }
    this.SetOnTouch = function (onTouch) {
        _seekBar.SetOnTouch(onTouch)
    }
    
    this.SetValue = function (value){
        _seekBar.SetValue(value);
    }
    this.GetValue = function () {
        return _seekBar.GetValue();
    }
    this.IsVisible = function () {
        return _seekBar.IsVisible();
    }
    this.Animate = function (type, callback, time) {
        _seekBar.Animate(type, callback, time)
    }
    this.Gone = function () {
        _seekBar.Gone();
    }
    this.SetDecimals = function (decimals) {
        _seekBar.SetDecimals(decimals)
    }
    
    _seekBar = drawSeekBar(value, range, width, parentLay, this);
}

function drawSeekBar(value, range, width, parentLay, seekObj) {
    let _seekBar;
    const seekColor = function () {
        return stateColor(md_theme_light_onSurfaceVariant, md_theme_dark_onSurfaceVariant);
    }
    
    _seekBar = MUI.CreateSeekBar(value, range, width, seekColor())
    
    parentLay.AddChild(_seekBar)
    
    return _seekBar;
}



var _bSheet;
var _sSheet;

function slideSheetObject(sheetLayout, width, options) {
    
    this.Dismiss = function () {
        _sSheet.Animate('SlideToRight', function () {
            app.DestroyLayout(slideSheetContainer);
        }, 210);
    }
    
    this.Show = function () {
        drawSlideSheet(sheetLayout, width, options, this);
    }
    
}

function drawSlideSheet(sheetLayout, width, options, that) {
    slideSheetContainer = app.CreateLayout('Linear', 'FillXY,VCenter,Bottom,Right');
    slideSheetContainer.SetSize(1, 1);
    slideSheetContainer.SetOnTouchUp(that.dismissSlideSheet);
    
    _sSheet = app.CreateLayout('Card', 'FillX,VCenter,Right');
    _sSheet.SetSize(width, 1);
    _sSheet.SetCornerRadius(15);
    _sSheet.Animate('BounceRight', null, 550);
    _sSheet.AddChild(sheetLayout);
    
    slideSheetContainer.SetBackColor(stateColor(md_theme_light_scrim, md_theme_dark_scrim))
    _sSheet.SetBackColor(stateColor(md_theme_light_surfaceVariant, md_theme_dark_surfaceVariant))
    slideSheetContainer.SetBackAlpha(0.33);
    slideSheetContainer.AddChild(_sSheet);
    app.AddLayout(slideSheetContainer);
    
    
}


function bottomSheetObject(sheetLayout, height, options) {
    this.Dismiss = function () {
        dismissBSheet();
    }
    this.Show = function () {
        drawBottomSheet(sheetLayout, height, options);
    }
}

function drawBottomSheet(sheetLayout, height, options) {
    bottomSheetContainer = app.CreateLayout('Linear', 'FillXY,VCenter,Bottom');
    bottomSheetContainer.SetSize(1, 1);
    bottomSheetContainer.SetOnTouchUp(dismissBSheet);
    bottomSheetContainer.SetBackColor(stateColor(md_theme_light_scrim, md_theme_dark_scrim));
    bottomSheetContainer.SetBackAlpha(0.33);
    
    _bSheet = app.CreateLayout('Card', 'FillX,VCenter,Bottom');
    _bSheet.SetSize(-1, height);
    _bSheet.SetCornerRadius(28);
    _bSheet.Animate('BounceBottom', null, 550);
    _bSheet.AddChild(sheetLayout);
    _bSheet.SetBackColor(stateColor(md_theme_light_surfaceVariant, md_theme_dark_surfaceVariant))
    bottomSheetContainer.AddChild(_bSheet);
    
    
    app.AddLayout(bottomSheetContainer);
    
}

function dismissBSheet() {
    _bSheet.Animate('SlideToBottom', function () {
        app.DestroyLayout(bottomSheetContainer);
    }, 210);
}

function menuObj(menuType, list, position) {
    this.SetOnTouch = function (onTouch) {
        this.onTouch = onTouch;
    }
    switch (menuType) {
    case 'simple':
        drawSimpleMenu(menuType, list, position, this);
        break;
    case 'withIcon':
        drawMenuWithIcon(menuType, list, position, this);
    }
}

function drawSimpleMenu(menuType, list, position, menuFunc) {
    let menuWidth = () => {
        if (app.IsTablet()) return 280;
        else return 190;
    }
    
    topValue = () => {
        //alert(top)
        if (top < 0.25) return top + 0.03
        else return top - 0.23;
    }
    
    
    menuContainer = app.CreateLayout('Linear', position);
    menuContainer.SetSize(1, 1)
    menuContainer.SetOnTouch(function () {
        app.RemoveLayout(menuContainer)
    })
    
    menuUi = app.CreateLayout('Card', position + 'Center')
    menuContainer.AddChild(menuUi)
    menuUi.SetMargins(0.05, topValue())
    menuUi.Animate('FadeIn', null, 100)
    menuUi.SetSize(menuWidth(), null, 'dp')
    menuUi.SetCornerRadius(4)
    
    list = app.CreateList(list, menuWidth(), null, 'Menu,Expand')
    list.SetOnTouch(function (title) {
        try {
            menuFunc.onTouch(title)
        } catch (err) {
            return null;
        }
    })
    menuUi.AddChild(list)
    
    app.AddLayout(menuContainer)
    
    if (theme === 'light') {
        menuUi.SetBackColor(md_theme_light_secondary)
        list.SetBackColor(md_theme_light_secondary)
    } else {
        menuUi.SetBackColor(md_theme_dark_secondary)
        list.SetBackColor(md_theme_dark_secondary)
    }
    
}

function drawMenuWithIcon(menuType, list, position, menuFunc) {
    let menuWidth = () => {
        if (app.IsTablet()) return 280;
        else return 190;
    }
    
    //alert(top)
    topValue = () => {
        if (top < 0.25) return top + 0.03
        else return top - 0.23;
    }
    menuContainer = app.CreateLayout('Linear', position);
    menuContainer.SetSize(1, 1)
    menuContainer.SetOnTouch(function () {
        app.RemoveLayout(menuContainer)
    })
    
    menuUi = app.CreateLayout('Card', position + 'Center')
    menuContainer.AddChild(menuUi)
    menuUi.SetMargins(0.05, topValue())
    menuUi.Animate('FadeIn', null, 100)
    menuUi.SetSize(menuWidth(), null, 'dp')
    menuUi.SetCornerRadius(4)
    
    list = app.CreateList(list, menuWidth(), null, 'Menu,Expand')
    list.SetFontFile(defaultFont)
    list.SetOnTouch(function (title, icon) {
        try {
            menuFunc.onTouch(title, icon)
        } catch (err) {
            return null;
        }
    })
    menuUi.AddChild(list)
    
    app.AddLayout(menuContainer)
    
    if (theme === 'light') {
        menuUi.SetBackColor(md_theme_light_secondary)
        list.SetBackColor(md_theme_light_secondary)
    } else {
        menuUi.SetBackColor(md_theme_dark_secondary)
        list.SetBackColor(md_theme_dark_secondary)
    }
}



function navDrawerObject(drawerLayout, side, width, options) {
    this.OpenDrawer = function (side) {
        app.OpenDrawer(side)
    }
    this.CloseDrawer = function (side) {
        app.CloseDrawer(side)
    }
    this.RemoveDrawer = function (side) {
        
    }
    drawNavDrawer(drawerLayout, side, width, options, this)
}


function drawNavDrawer(drawerLayout, side, width, options) {
    _drawerContainer = app.CreateLayout('Card', 'FillXY')
    
    _drawerContainer.AddChild(drawerLayout)
    
    if (theme === 'dark') {
        _drawerContainer.SetBackColor(md_theme_dark_surface);
    } else {
        _drawerContainer.SetBackColor(md_theme_light_surface);
    }
    app.AddDrawer(_drawerContainer, side, width)
}


var bottomBarContainer;

function bottomBarObject(barPropsInjson, parentLay) {
    
    this.SetOnTouch = function (onTouchFunc) {
        this.onTouchFunc = onTouchFunc;
    }
    
    this.SetRawAdjustment = function (distanceFromTop) {
        if (layoutType.toLowerCase().includes('linear')) {
            bottomBarContainer.SetMargins(0, distanceFromTop);
        } else {
            bottomBarContainer.SetPosition(0, distanceFromTop);
        }
    }
    
    if (layoutType.toLowerCase().includes('linear') || layoutType.toLowerCase().includes('frame') || layoutType.toLowerCase().includes('card')) {
        warnDeveloper('BottomAppBar Cannot Be Set On A Linear Layout','Change To Absolute Layout');
        return;
    }
    else {
        drawBottomBar(barPropsInjson, parentLay, this);
    }
}

function drawBottomBar(barPropsInjson, parentLay, bottomBarObj) {
    
    let props = JSON.stringify(barPropsInjson);
    let info = JSON.parse(props);
    const icon1 = info.firstIcon;
    const icon2 = info.secondIcon;
    const icon3 = info.thirdIcon;
    const icon4 = info.fourthIcon;
    const fabIcon = info.fabIcon;
    
    bottomBarContainer = app.CreateLayout("Card", "Horizontal,Bottom,FillXY");
    bottomBarContainer.SetSize(pxToDpConversion(DW()), 80, 'dp');
    bottomBarContainer.SetElevation(3, 'dp');
    bottomBarContainer.SetPosition(0, 0.9);
    
    const box = app.CreateLayout('Linear', 'Horizontal');
    bottomBarContainer.AddChild(box);
    box.SetSize(-1, 80, 'dp');
    
    const _icon1 = app.CreateText(icon1, null, null, 'H/VCenter,FillXY');
    _icon1.SetFontFile(defaultIcons);
    _icon1.SetTextSize(24);
    _icon1.SetOnTouchUp(function () {
        if (bottomBarObj.onTouchFunc){
            bottomBarObj.onTouchFunc(icon1);
        }
    });
    
    _icon1.SetMargins(8, null, 16, null, 'dp');
    
    const _icon2 = app.CreateText(icon2, null, null, 'H/VCenter,FillXY');
    _icon2.SetFontFile(defaultIcons);
    _icon2.SetTextSize(24);
    _icon2.SetOnTouchUp(function () {
        if (bottomBarObj.onTouchFunc){
        bottomBarObj.onTouchFunc(icon2);
        }
    });
    _icon2.SetMargins(8, null, 16, null, 'dp');
    
    const _icon3 = app.CreateText(icon3, null, null, 'H/VCenter,FillXY');
    _icon3.SetFontFile(defaultIcons);
    _icon3.SetTextSize(24);
    _icon3.SetOnTouchUp(function () {
        if (bottomBarObj.onTouchFunc){
        bottomBarObj.onTouchFunc(icon3);
        }
    });
    _icon3.SetMargins(8, null, 16, null, 'dp');
    
    const _icon4 = app.CreateText(icon4, null, null, 'H/Vcenter,FillXY');
    _icon4.SetFontFile(defaultIcons);
    _icon4.SetTextSize(24);
    _icon4.SetOnTouchUp(function () {
        if (bottomBarObj.onTouchFunc){
        bottomBarObj.onTouchFunc(icon4);
        }
    });
    _icon4.SetMargins(8, null, 16, null, 'dp');
    
    const fab = app.CreateLayout('Card', 'Right,FillXY');
    fab.SetSize(56, 56, 'dp');
    fab.SetElevation(0);
    fab.SetCornerRadius(16);
    fab.SetMargins(96, 12, 16, 12, 'dp');
    
    const _fabIcon = app.CreateText(fabIcon, null, null, 'H/VCenter,FillXY');
    _fabIcon.SetFontFile(defaultIcons);
    _fabIcon.SetOnTouchDown(function () {
        if (bottomBarObj.onTouchFunc){
        bottomBarObj.onTouchFunc(fabIcon);
        }
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


const param = '/repos/oarabiledev/Material3/releases/latest';

app.HttpRequest('GET', 'https://api.github.com', param, null, function (error,reply,status) {
    if(app.InIDE() && showUpdates){
    if(status === 200 && !error){
    let ans = JSON.parse(reply);
    app.WriteFile('gitAns.json',reply)
    const latestVersion = ans.tag_name;
    
    
    if (latestVersion !== pluginVersion) {
        const updateMessage = `An update is available :: Version ${latestVersion} \n
        Update Link:: https://github.com/oarabiledev/Material3/releases/tag/${latestVersion}`;
        
        console.log("<div style='color:yellow'> " + updateMessage);
        
        updateDialog = ui.showDialog('Update Warning !', `This Version Of Material3 is not upto-date.
        \nLatest Version Is :: ${latestVersion}`, null, 'Ignore', 'Update');
        
        updateDialog.setOnAction( function (boolAnswer) {
            if (boolAnswer) {
                app.OpenUrl(`https://github.com/oarabiledev/Material3/releases/tag/${latestVersion}`);
            } else {
                app.SaveBoolean('showUpdate?', false, M3Config);
            }
        });
    }
    }
    else {
        warnDeveloper('No Internet, Cannot Check For Updates','Issue With Checking For Updates')
    }
    }
    else return;
}, null);
