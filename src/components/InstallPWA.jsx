import { useEffect, useState } from 'react'
import './InstallPWA.css'

function InstallPWA({
  showExitPopup,
  setShowExitPopup
}) {
  const [deferredPrompt, setDeferredPrompt] = useState(null)

  // PWA 설치 가능 이벤트
  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault()
      setDeferredPrompt(event)
    }

    window.addEventListener(
      'beforeinstallprompt',
      handleBeforeInstallPrompt
    )

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      )
    }
  }, [])

  // PWA 설치
  const handleInstall = async () => {
    if (!deferredPrompt) return false

    deferredPrompt.prompt()

    const { outcome } = await deferredPrompt.userChoice

    console.log(`PWA 설치 결과: ${outcome}`)

    setDeferredPrompt(null)

    return outcome === 'accepted'
  }

  // 메인페이지 하단 버튼
  const handleBottomInstall = () => {
    if (!deferredPrompt) {
      alert('현재 홈 화면 추가 기능을 사용할 수 없습니다.')
      return
    }

    handleInstall()
  }

  // 종료 팝업 YES
  const handleYes = async () => {
    setShowExitPopup(false)

    if (deferredPrompt) {
      await handleInstall()
    }

    window.history.back()
  }

  // 종료 팝업 NO
  const handleNo = () => {
    setShowExitPopup(false)

    window.history.back()
  }

  return (
    <>
      {/* 메인페이지 하단 */}
        <button
          className="pwa-install-bottom"
          onClick={handleBottomInstall}
        >
          홈 화면에 추가
        </button>

      {/* 종료 전 팝업 */}
      {showExitPopup && (
        <div className="pwa-exit-overlay">
          <div className="pwa-exit-popup">

            <button
              className="pwa-exit-close"
              onClick={() => setShowExitPopup(false)}
            >
              ×
            </button>

            <h3>잠깐!</h3>

            <p>
              ONIT을 홈 화면에 추가하시겠습니까?
            </p>

            <div className="pwa-exit-buttons">
              <button
                className="pwa-yes"
                onClick={handleYes}
              >
                YES
              </button>

              <button
                className="pwa-no"
                onClick={handleNo}
              >
                NO
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default InstallPWA