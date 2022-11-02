import liff from '@line/liff';

export class LINEService {
  static hasInitialized  = false;

  static async initLiff(
    params = { liffId, clientId },
    options = { skipLineUserExistenceCheck, initCheck }
  ) {
    if (options.initCheck && this.hasInitialized) return

    if (isMock) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      this.hasInitialized = true
      return
    }

    // 1. LIFFの初期化
    try {
      // LIFFの初期化がまれにいつまでたっても終わらない現象があるため、5秒でタイムアウトする
      const timerId = setTimeout(() => {
        alert('タイムアウトしました。一度ページを閉じます。もう一度お試しください。')
        this.closeLiff()
      }, 5000)
      await liff
        .init({
          liffId: params.liffId,
          withLoginOnExternalBrowser: true,
        })
        .then(() => {
          if (!liff.isLoggedIn()) liff.login()
        })
      clearTimeout(timerId)
    } catch (e) {
      console.error(e.message)
      alert('ページの読み込みに失敗しました。時間をおいて再度お試しください。')
      return this.closeLiff()
    }

    // 2. DB に line user データが登録済みかをチェック
    // if (!options?.skipLineUserExistenceCheck) {
    //   try {
    //     // このように動的インポートしないと、LineUserRepositoryの継承元であるLiffBaseRepositoryが見つからないエラーがでる
    //     const { LineUserRepository } = await import('~/models/liff/User')
    //     const exists = await new LineUserRepository(params).exists()
    //     if (!exists) {
    //       // ユーザ登録ページではDBに該当レコードが無いときは create を行っている前提。
    //       alert(
    //         'LINE IDが登録されていません。ユーザ登録をもう一度行ってください。問題が解決しない場合は管理者にお問い合わせください。'
    //       )
    //       return this.closeLiff()
    //     }
    //   } catch {
    //     alert('登録情報の確認に失敗しました。時間をおいて再度お試しください。')
    //     return this.closeLiff()
    //   }
    // }

    this.hasInitialized = true
  }
}