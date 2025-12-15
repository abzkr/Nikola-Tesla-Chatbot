import React, { useState, useRef, useEffect } from 'react';
import './AccessibilityMenu.css';
 
const AccessibilityMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
        contrast: 'normal',
        biggerText: false,
        textSpacing: false,
        dyslexiaFont: false,
        removeAnimations: false,
        removeImages: false
    });
 
    const menuRef = useRef(null);
    const toggleButtonRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    // Close on ESC and click outside, manage focus
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
                toggleButtonRef.current?.focus();
            }
        };

        const onPointerDown = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target) && !toggleButtonRef.current.contains(e.target)) {
                setIsOpen(false);
                toggleButtonRef.current?.focus();
            }
        };

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('pointerdown', onPointerDown);

        // Move focus into menu when opened
        const focusable = menuRef.current?.querySelector('button, [href], input, [tabindex]:not([tabindex="-1"])');
        if (focusable) focusable.focus();

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('pointerdown', onPointerDown);
        };
    }, [isOpen]);
 
    const handleContrastChange = (mode) => {
        setSettings({ ...settings, contrast: mode });
       
        // Remove all contrast classes
        document.body.classList.remove('invert-colors', 'dark-contrast', 'light-contrast');
       
        // Add selected contrast class
        if (mode !== 'normal') {
            document.body.classList.add(mode);
        }
    };
 
    const toggleBiggerText = () => {
        const newValue = !settings.biggerText;
        setSettings({ ...settings, biggerText: newValue });
       
        if (newValue) {
            document.body.classList.add('bigger-text');
        } else {
            document.body.classList.remove('bigger-text');
        }
    };
 
    const toggleTextSpacing = () => {
        const newValue = !settings.textSpacing;
        setSettings({ ...settings, textSpacing: newValue });
       
        if (newValue) {
            document.body.classList.add('better-spacing');
        } else {
            document.body.classList.remove('better-spacing');
        }
    };
 
    const toggleDyslexiaFont = () => {
        const newValue = !settings.dyslexiaFont;
        setSettings({ ...settings, dyslexiaFont: newValue });
       
        if (newValue) {
            document.body.classList.add('dyslexia-friendly');
        } else {
            document.body.classList.remove('dyslexia-friendly');
        }
    };
 
    const toggleRemoveAnimations = () => {
        const newValue = !settings.removeAnimations;
        setSettings({ ...settings, removeAnimations: newValue });
       
        if (newValue) {
            document.body.classList.add('no-animations');
        } else {
            document.body.classList.remove('no-animations');
        }
    };
 
    const toggleRemoveImages = () => {
        const newValue = !settings.removeImages;
        setSettings({ ...settings, removeImages: newValue });
       
        if (newValue) {
            document.body.classList.add('no-images');
        } else {
            document.body.classList.remove('no-images');
        }
    };
 
    const resetAll = () => {
        setSettings({
            contrast: 'normal',
            biggerText: false,
            textSpacing: false,
            dyslexiaFont: false,
            removeAnimations: false,
            removeImages: false
        });
       
        document.body.classList.remove(
            'invert-colors',
            'dark-contrast',
            'light-contrast',
            'bigger-text',
            'better-spacing',
            'dyslexia-friendly',
            'no-animations',
            'no-images'
        );
    };
 
    return (
        <>
            <button
                ref={toggleButtonRef}
                className="accessibility-button"
                onClick={toggleMenu}
                aria-label="Accessibility Menu"
                aria-haspopup="dialog"
                aria-expanded={isOpen}
            >
                <svg viewBox="0 0 100 100" width="40" height="40">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3"/>
                    <circle cx="50" cy="35" r="8" fill="currentColor"/>
                    <path d="M 50 45 L 50 75 M 35 55 L 50 55 L 65 55" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                </svg>
            </button>
 
            {isOpen && (
                <div
                    ref={menuRef}
                    className="accessibility-menu"
                    role="dialog"
                    aria-label="Accessibility options"
                    tabIndex={-1}
                >
                    <div className="accessibility-header">
                        <h3>Accessibility</h3>
                        <button className="close-button" onClick={toggleMenu} aria-label="Close accessibility menu">×</button>
                    </div>
 
                    <div className="accessibility-content">
                        {/* Contrast Options */}
                        <div className="accessibility-section">
                            <h4>Contrast</h4>
                            <div className="button-group">
                                <button
                                    className={settings.contrast === 'normal' ? 'active' : ''}
                                    onClick={() => handleContrastChange('normal')}
                                >
                                    Normal
                                </button>
                                <button
                                    className={settings.contrast === 'invert-colors' ? 'active' : ''}
                                    onClick={() => handleContrastChange('invert-colors')}
                                >
                                    Invert
                                </button>
                                <button
                                    className={settings.contrast === 'dark-contrast' ? 'active' : ''}
                                    onClick={() => handleContrastChange('dark-contrast')}
                                >
                                    Dark
                                </button>
                                <button
                                    className={settings.contrast === 'light-contrast' ? 'active' : ''}
                                    onClick={() => handleContrastChange('light-contrast')}
                                >
                                    Light
                                </button>
                            </div>
                        </div>
 
                        {/* Text Size */}
                        <div className="accessibility-section">
                            <label className="accessibility-toggle">
                                <input
                                    type="checkbox"
                                    checked={settings.biggerText}
                                    onChange={toggleBiggerText}
                                />
                                <span>Bigger Text</span>
                            </label>
                        </div>
 
                        {/* Text Spacing */}
                        <div className="accessibility-section">
                            <label className="accessibility-toggle">
                                <input
                                    type="checkbox"
                                    checked={settings.textSpacing}
                                    onChange={toggleTextSpacing}
                                />
                                <span>Better Text Spacing</span>
                            </label>
                        </div>
 
                        {/* Dyslexia Friendly */}
                        <div className="accessibility-section">
                            <label className="accessibility-toggle">
                                <input
                                    type="checkbox"
                                    checked={settings.dyslexiaFont}
                                    onChange={toggleDyslexiaFont}
                                />
                                <span>Dyslexia Friendly</span>
                            </label>
                        </div>
 
                        {/* Remove Animations */}
                        <div className="accessibility-section">
                            <label className="accessibility-toggle">
                                <input
                                    type="checkbox"
                                    checked={settings.removeAnimations}
                                    onChange={toggleRemoveAnimations}
                                />
                                <span>Remove Animations</span>
                            </label>
                        </div>
 
                        {/* Remove Images */}
                        <div className="accessibility-section">
                            <label className="accessibility-toggle">
                                <input
                                    type="checkbox"
                                    checked={settings.removeImages}
                                    onChange={toggleRemoveImages}
                                />
                                <span>Remove Images</span>
                            </label>
                        </div>
 
                        {/* Reset Button */}
                        <button className="reset-all-button" onClick={resetAll}>
                            Reset All
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
 
export default AccessibilityMenu;
 
 